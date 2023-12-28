import React, { useState, useRef, useEffect } from "react";
 // Assurez-vous d'importer votre feuille de style
import video from "../../../videos/animation_lnujm45x.mp4";
import "../../../styles/ADMIN/VideoPlayer.css";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [fullscreen, setFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (video.paused) {
        videoRef.current.play();
    }
    else{
        videoRef.current.pause(); 
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    videoRef.current.volume = e.target.value / 100;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !videoRef.current.muted;
  };

  const handleProgressBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const widthPercent = (x * 100) / rect.width;
    const duration = videoRef.current.duration;
    videoRef.current.currentTime = (duration * widthPercent) / 100;
  };

  const toggleFullscreen = () => {
    if (!fullscreen) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreen(!fullscreen);
  };

  useEffect(() => {
    const updateProgress = () => {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
    };

    videoRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      videoRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className="container-video">
      <video
        ref={videoRef}
        src={video}
        id="video"
        onClick={togglePlay}
        className={isPlaying ? "playing" : ""}
        
      ></video>

      <div className="controle-video">
        <div className="barre-orange" onClick={handleProgressBarClick}>
          <div className="jus-orange" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="buttoms">
          <button id="play-pause" onClick={togglePlay}>
            {isPlaying ? (
              <i className="fa-solid fa-circle-pause"></i>
            ) : (
              <i className="fa-solid fa-circle-play"></i>
            )}
          </button>
          <button id="muet" onClick={toggleMute}>
            {isMuted ? "Volume" : "Muet"}
          </button>
          <input
            type="range"
            id="volume"
            min="0"
            max="100"
            value={volume}
            step="1"
            onChange={handleVolumeChange}
          />
          <button id="plein-ecran" onClick={toggleFullscreen}>
            {fullscreen ? (
              <i className="fa-solid fa-compress"></i>
            ) : (
              <i className="fa-solid fa-expand"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
