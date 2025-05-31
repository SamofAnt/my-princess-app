import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ScrollText from './ScrollPhrases';

// Анимации
const fadeIn = keyframes`
   from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const photoEnter = keyframes`
  from { opacity: 0; transform: scale(0.7) rotate(-5deg); }
  to { opacity: 1; transform: scale(1) rotate(0deg); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const heartPop = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
`;

// Стили
const PageBackground = styled.div`
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  min-height: 100vh;
  padding: 40px 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 42px;
  color: white;
  animation: ${fadeIn} 1s ease-out forwards;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
 margin-bottom: 50px;
  span {
    color: #ffd700;
  }
`;

const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PhotoFrame = styled.div`
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: ${({ delay }) => delay}s;
  transform-origin: center;

  &:hover {
    z-index: 10;

    img {
      animation: ${float} 3s ease-in-out infinite;
    }
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

const Caption = styled.p`
  text-align: center;
  color: white;
  font-style: italic;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;

  ${PhotoFrame}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LikeButton = styled.button`
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  border: none;
  background: white;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transform: scale(0);
  transition: transform 0.3s ease;

  ${PhotoFrame}:hover & {
    transform: scale(1);
  }

  &:hover {
    background: #ffeeee;
  }
`;

const Heart = styled.div`
  position: absolute;
  color: red;
  font-size: 18px;
  animation: ${heartPop} 1s forwards;
  pointer-events: none;
`;

const Footer = styled.footer`
  text-align: center;
  color: white;
  font-size: 14px;
  opacity: 0.7;
  margin-top: 30px;
  padding: 20px;
`;

// Основной компонент
const PhotoCollage = () => {
  const [images, setImages] = useState([]);
  const [hearts, setHearts] = useState([]);

  const captions = [
    "Наш первый день вместе",
    "Незабываемый вечер под звездами",
    "Вместе на берегу моря",
    "Наш первый совместный отпуск",
    "В этот день ты сказала 'да'",
    "Самый счастливый день в моей жизни"
  ];

  useEffect(() => {
    setTimeout(() => {
      setImages([
        '/gallery-imgs/photo-1.jpeg',
        '/gallery-imgs/photo-2.jpeg',
        '/gallery-imgs/photo-3.jpeg',
      ]);
    }, 500);
  }, []);

  const handleLike = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart = {
      id: uuidv4(),
      x,
      y,
      index
    };

    setHearts(prev => [...prev, newHeart]);

    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1000);
  };

  return (
    <PageBackground>
      <PageTitle>The history of <span>our</span> love</PageTitle>
      <CollageContainer>
        {images.map((src, index) => (
          <PhotoFrame key={index} delay={index * 0.15}>
            <Photo
              src={src}
              alt={`Фото ${index + 1}`}
              style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
            />
            <Caption>{captions[index % captions.length]}</Caption>
            <LikeButton onClick={(e) => handleLike(index, e)}>
              ❤️
              {hearts
                .filter(h => h.index === index)
                .map(h => (
                  <Heart
                    key={h.id}
                    style={{ left: `${h.x}px`, top: `${h.y}px` }}
                  >❤️</Heart>
                ))}
            </LikeButton>
          </PhotoFrame>
        ))}
      </CollageContainer>
      {/* <ScrollText/> */}
    </PageBackground>
  );
};

export default PhotoCollage;
