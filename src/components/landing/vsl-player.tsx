
"use client";

import { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

// Define the YouTube Player and Event types for TypeScript
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  unMute: () => void;
  isMuted: () => boolean;
  getPlayerState: () => number;
  getIframe: () => HTMLIFrameElement;
  destroy: () => void;
}

interface YTEvent {
  target: YTPlayer;
  data: number;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (id: string, options: any) => YTPlayer;
    };
  }
}

interface VslPlayerProps {
  videoId: string;
}

export function VslPlayer({ videoId }: VslPlayerProps) {
  const playerRef = useRef<YTPlayer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasUnmuted = useRef(false);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    };

    if (!window.YT) {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      loadYouTubeAPI();
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
        // Cleanup player on component unmount
        if (playerRef.current) {
            playerRef.current.destroy();
        }
    };
  }, []);

  const onYouTubeIframeAPIReady = () => {
    if (!document.getElementById('yt-player-vsl')) return;

    playerRef.current = new window.YT!.Player('yt-player-vsl', {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        playsinline: 1,
        loop: 1,
        playlist: videoId, // Required for loop to work
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event: YTEvent) => {
    setIsReady(true);
    event.target.playVideo();
  };
  
  const onPlayerStateChange = (event: YTEvent) => {
    // YT.PlayerState.PLAYING === 1
    // YT.PlayerState.PAUSED === 2
    if (event.data === 1) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };


  const handlePlayerClick = () => {
    if (!playerRef.current) return;

    if (!hasUnmuted.current) {
      // First click: unmute and restart video
      hasUnmuted.current = true;
      setIsMuted(false);
      playerRef.current.unMute();
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
    } else {
      // Subsequent clicks: toggle play/pause
      const playerState = playerRef.current.getPlayerState();
      if (playerState === 1) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <div 
        className="w-full h-full bg-muted rounded-lg shadow-2xl shadow-primary/20 border border-border relative cursor-pointer group"
        onClick={handlePlayerClick}
    >
      <div id="yt-player-vsl" className="w-full h-full rounded-lg" />
      
      {isMuted && isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300">
          <p className="text-white font-bold text-xl mb-2">CLIQUE PARA OUVIR</p>
          <div className="bg-primary text-primary-foreground rounded-full p-4">
            <VolumeX className="w-8 h-8" />
          </div>
        </div>
      )}

      {!isPlaying && hasUnmuted.current && (
         <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <div className="bg-primary text-primary-foreground rounded-full p-6 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            </div>
        </div>
      )}

    </div>
  );
}
