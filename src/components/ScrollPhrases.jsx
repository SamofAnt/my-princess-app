import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 50px 0;
`;

const Phrase = styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
  animation: ${fadeInUp} 1s forwards;
  margin: 20px 0;

  &.hidden {
    animation: ${fadeOut} 1s forwards;
  }
`;

const LovePhrase = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: pink;
  opacity: 0;
  animation: ${fadeInUp} 1.5s forwards;
  text-shadow: 0px 4px 10px rgba(255, 105, 180, 0.5);
  padding-top: 50px;
`;

const phrases = [
  "Наше первое свидание, полное улыбок...",
  "Тёплые объятия в прохладный вечер...",
  "Совместные мечты под звёздным небом...",
  "Любовь, которая растёт с каждым днём...",
];

const ScrollText = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight * 0.7;

      if (scrollPosition > threshold) {
        setVisibleIndex(phrases.length);
      } else {
        const index = Math.floor(scrollPosition / 300) % phrases.length;
        setVisibleIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TextContainer>
      {phrases.map((text, index) => (
        <Phrase key={index} className={index === visibleIndex ? "" : "hidden"}>
          {text}
        </Phrase>
      ))}
      {visibleIndex === phrases.length && <LovePhrase>Я люблю тебя ❤️</LovePhrase>}
    </TextContainer>
  );
};

export default ScrollText;
