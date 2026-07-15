import { useState, useRef, useEffect } from 'react';

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.08; // Set low volume but audible enough for background presence
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // If it's playing for the very first time (or close to 0), start from 0:15
        if (audioRef.current.currentTime < 1) {
          audioRef.current.currentTime = 15;
        }
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/Daydream.mp3" loop preload="auto" />
      <button
        onClick={togglePlay}
        className="hidden md:flex fixed bottom-6 left-6 z-50 bg-neo-white border-2 border-black px-3 py-2 font-mono font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover items-center gap-2 pointer-events-auto"
        aria-label="Toggle background music"
      >
        <span className="text-xl leading-none">
          <i className={isPlaying ? "ri-volume-up-fill" : "ri-volume-mute-fill"}></i>
        </span>
        <span className="text-sm tracking-wider">BGM {isPlaying ? 'ON' : 'OFF'}</span>
      </button>
    </>
  );
}
