import React, { useState, useEffect, useRef } from 'react';
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
  `${process.env.PUBLIC_URL}/music/Stan.mp3`,
];

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(tracks[0]));

  useEffect(() => {
    const audio = audioRef.current;
    // Включаем зацикливание трека
    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (playing) {
      audio.play().catch(err => console.log("Error playing audio:", err));
    } else {
      audio.pause();
    }
  }, [playing]);

  const toggleMusic = () => {
    setPlaying(prev => !prev);
  };

  return (
    <AudioButton onClick={toggleMusic}>
      {playing ? '🔇' : '🎵'}
    </AudioButton>
  );
};

export default MusicPlayer;
