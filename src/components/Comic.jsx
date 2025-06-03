import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const ComicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  margin-top: 40px;
`;


const ComicImage = styled.img`
  width: 50%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;


const DotContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  z-index: 10000;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active }) => (active ? 'gold' : 'rgba(255, 255, 255, 0.6)')};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 20px;
  
  @media (max-width: 480px) {
    display: none;
  }
`;


const ArrowContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px;
  
  @media (max-width: 480px) {
    display: flex;
  }
`;


const Button = styled.button`
  padding: 12px 30px;
  font-size: 18px;
  border: 2px solid transparent;
  border-radius: 25px;
  cursor: pointer;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: black;
  font-weight: bold;
  opacity: 0;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: fadeInButton 1s forwards 0.5s;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: all 0.6s ease;
  }
  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.6);
    background: linear-gradient(45deg, #FFA500, #FFD700);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  &:hover:before {
    left: 100%;
  }
  &:active {
    transform: scale(0.98) translateY(0);
    box-shadow: 0 3px 10px rgba(255, 215, 0, 0.4);
  }

  @keyframes fadeInButton {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;


const ButtonText = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

const ButtonIcon = styled.span`
  display: none;
  @media (max-width: 480px) {
    display: inline;
    font-size: 24px;
  }
`;


const ArrowButton = styled.button`
  border: none;
  background: transparent;
  font-size: 36px;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
  
  &:hover {
    opacity: 1;
  }
`;

const images = [
  `${process.env.PUBLIC_URL}/comic/comic-3.png`,
  `${process.env.PUBLIC_URL}/comic/comic-1.jpeg`,
  `${process.env.PUBLIC_URL}/comic/comic-2.png`,
  `${process.env.PUBLIC_URL}/comic/comic-4.png`,
  `${process.env.PUBLIC_URL}/comic/comic-5.png`,
  `${process.env.PUBLIC_URL}/comic/comic-6.png`,
];

const Comic = () => {
  const [index, setIndex] = useState(0);

  const nextPage = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevPage = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <ComicContainer>
      <ComicImage src={images[index]} alt="Комикс" />
      
      <DotContainer>
        {images.map((_, idx) => (
          <Dot key={idx} active={idx === index} />
        ))}
      </DotContainer>

      {/* Навигация для больших экранов */}
      <ButtonContainer>
        <Button onClick={prevPage} disabled={index === 0}>
          <ButtonIcon>←</ButtonIcon>
          <ButtonText>Back</ButtonText>
        </Button>
        <Button onClick={nextPage} disabled={index === images.length - 1}>
          <ButtonText>Next</ButtonText>
          <ButtonIcon>→</ButtonIcon>
        </Button>
      </ButtonContainer>

      {/* Стрелочные кнопки для маленьких экранов */}
      <ArrowContainer>
        <ArrowButton onClick={prevPage} disabled={index === 0}>←</ArrowButton>
        <ArrowButton onClick={nextPage} disabled={index === images.length - 1}>→</ArrowButton>
      </ArrowContainer>
    </ComicContainer>
  );
};

export default Comic;
