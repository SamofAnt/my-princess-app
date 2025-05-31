import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AudioButton = styled.button`
  position: absolute;
  top: 10px;
  right: 50px;
  background: transparent;
  border: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: gold;
  }
`;

const tracks = [
  "/music/Stan.mp3"
];

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audio = new Audio(tracks[currentTrackIndex]);

  useEffect(() => {
    audio.loop = false; // Отключаем повтор одного трека
    audio.addEventListener("ended", () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    });

    return () => {
      audio.removeEventListener("ended", () => {});
      audio.pause();
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    audio.src = tracks[currentTrackIndex];
    if (playing) {
      audio.play();
    }
  }, [currentTrackIndex]);

  const toggleMusic = () => {
    if (playing) {
      setTimeout(() => {
        audio.volume = 0; 
        setTimeout(() => audio.pause(), 500);
      }, 100);
    } else {
      audio.play();
      audio.volume = 1;
    }
    setPlaying(!playing);
  };

  return (
    <AudioButton onClick={toggleMusic}>
      {playing ? '🔇' : '🎵'}
    </AudioButton>
  );
};

export default MusicPlayer;
