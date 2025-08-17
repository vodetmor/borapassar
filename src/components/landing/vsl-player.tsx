
"use client";

import { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume2, Play } from 'lucide-react';

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
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasUnmuted = useRef(false);

  useEffect(() => {
    // Function to initialize the player
    const createPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('yt-player-vsl', {
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
      }
    };

    // If the YT API is already loaded, create the player
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // Otherwise, set up the callback and load the script
      window.onYouTubeIframeAPIReady = createPlayer;
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }

    return () => {
        // Cleanup player on component unmount
        if (playerRef.current) {
            playerRef.current.destroy();
        }
        window.onYouTubeIframeAPIReady = undefined;
    };
  }, [videoId]);

  const onPlayerReady = (event: YTEvent) => {
    event.target.playVideo();
  };
  
  const onPlayerStateChange = (event: YTEvent) => {
    // YT.PlayerState.PLAYING === 1
    // YT.PlayerState.PAUSED === 2
     if (event.data === window.YT.PlayerState.PLAYING) {
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
      if (playerState === window.YT.PlayerState.PLAYING) {
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
      <div id="yt-player-vsl" className="w-full h-full rounded-lg pointer-events-none" />
      
      {isMuted && isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300 pointer-events-none">
          <p className="text-white font-bold text-xl mb-2">CLIQUE PARA OUVIR</p>
          <div className="bg-primary text-primary-foreground rounded-full p-4">
            <VolumeX className="w-8 h-8" />
          </div>
        </div>
      )}

      {!isPlaying && hasUnmuted.current && (
         <div className="absolute inset-0 flex items-center justify-center bg-black/60 pointer-events-none">
            <div className="bg-primary text-primary-foreground rounded-full p-6 animate-pulse">
                <Play className="w-12 h-12 fill-current" />
            </div>
        </div>
      )}

    </div>
  );
}
