import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: white;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(-50px);
  animation: fadeInTitle 1s forwards;
  @keyframes fadeInTitle {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StylishButton = styled.button`
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

const HeartIcon = styled.span`
  display: inline-block;
  margin-left: 8px;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Home = () => {
  return (
    <Background>
      <Title>This is a story of two hearts united by destiny... 💖</Title>
      <Link to="/collage" style={{ textDecoration: 'none' }}>
        <StylishButton>
          Start The Journey
          <HeartIcon>❤️</HeartIcon>
        </StylishButton>
      </Link>
    </Background>
  );
};

export default Home;