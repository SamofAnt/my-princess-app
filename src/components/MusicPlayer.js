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
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  // Создаем объект аудио один раз
  const audioRef = useRef(new Audio(tracks[0]));

  useEffect(() => {
    const audio = audioRef.current;
    // Отключаем зацикливание отдельного трека, чтобы переключать между треками
    audio.loop = false;
    
    // Обработчик события окончания трека
    const handleEnded = () => {
      setCurrentTrackIndex(prevIndex => (prevIndex + 1) % tracks.length);
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    // Обновляем источник аудио при смене трека
    audio.src = tracks[currentTrackIndex];
    if (playing) {
      audio.play();
    }
  }, [currentTrackIndex, playing]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
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
