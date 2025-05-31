import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StarsContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  background: black;
  overflow: hidden;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
`;

const floating = {
  y: [0, 15, 0], // Луна плавно двигается вверх-вниз
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Moon = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #ffffff 30%, #cccccc 70%);
  border-radius: 50%;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
`;

const generateStars = () => {
  let stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 5,
    });
  }
  return stars;
};

const Stars = () => {
  const stars = generateStars();

  return (
    <StarsContainer>
      <Moon animate={floating} />
      {stars.map((star) => (
        <Star
          key={star.id}
          style={{ top: star.y, left: star.x }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
        />
      ))}
    </StarsContainer>
  );
};

export default Stars;
