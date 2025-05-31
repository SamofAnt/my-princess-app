import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOutDown = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(30px); }
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
  margin: 100px 0;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeInUp : fadeOutDown)} 1s forwards;
`;

const LovePhrase = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: pink;
  opacity: 0;
  animation: ${fadeInUp} 2s forwards;
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
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = refs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight * 0.7;
      });
      setVisible(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TextContainer>
      {phrases.map((text, index) => (
        <Phrase
          key={index}
          ref={(el) => (refs.current[index] = el)}
          isVisible={visible[index]}
        >
          {text}
        </Phrase>
      ))}
      {visible.every(v => v) && <LovePhrase>Я люблю тебя ❤️</LovePhrase>}
    </TextContainer>
  );
};

export default ScrollText;
