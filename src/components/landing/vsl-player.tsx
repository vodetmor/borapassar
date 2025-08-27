
"use client";

import { useState, useRef, useEffect } from 'react';
import { VolumeX, Play } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface VslPlayerProps {
  videoSrc: string;
}

export function VslPlayer({ videoSrc }: VslPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true); // Start as playing since it will autoplay
  const [progress, setProgress] = useState(0);
  const hasUnmuted = useRef(false);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.muted = true;
    }
  }, []);

  const handlePlayerClick = () => {
    if (!videoRef.current) return;

    if (!hasUnmuted.current) {
      hasUnmuted.current = true;
      setIsMuted(false);
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  const handleTimeUpdate = () => {
    if (videoRef.current) {
        const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percent);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <div 
        className="w-full h-full bg-muted rounded-lg shadow-2xl shadow-primary/20 border border-border relative cursor-pointer group overflow-hidden"
        onClick={handlePlayerClick}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        playsInline
        autoPlay 
        muted 
        className="w-full h-full rounded-lg pointer-events-none object-cover"
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        controls={false}
      />
      
      {isMuted && (
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
                <Play className="w-12 h-12 fill-current ml-1" />
            </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <Progress value={progress} className="h-2 rounded-none bg-black/20" />
      </div>

    </div>
  );
}
