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
  `${process.env.PUBLIC_URL}/music/houseOfBalloons.mp3`,
];

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  // Инициализируем аудио с первым треком
  const audioRef = useRef(new Audio(tracks[0]));

  useEffect(() => {
    const audio = audioRef.current;
    // Отменяем зацикливание индивидуального трека, чтобы обеспечить переключение
    audio.loop = false;

    // Обработчик события окончания трека
    const handleEnded = () => {
      setCurrentTrackIndex(prevIndex => {
        // Если текущий индекс последний, начинаем сначала, иначе – следующий трек
        const nextIndex = prevIndex + 1;
        return nextIndex < tracks.length ? nextIndex : 0;
      });
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  // При изменении текущего трека или флага воспроизведения обновляем источник и запускаем трек
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex];
    if (playing) {
      audio.play().catch(err => console.log("Error playing audio:", err));
    }
  }, [currentTrackIndex, playing]);

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
