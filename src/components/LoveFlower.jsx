import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const bloom = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const FlowerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color: pink;
  animation: ${bloom} 2s ease-out, ${fadeOut} 3s 4s forwards;
  pointer-events: none;
  z-index: 99999;
`;

const LoveFlower = () => {
  const [showFlower, setShowFlower] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowFlower(false), 7000); // Цветок исчезает через 7 секунд
  }, []);

  return showFlower ? <FlowerContainer>🌸</FlowerContainer> : null;
};

export default LoveFlower;
