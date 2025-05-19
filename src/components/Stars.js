import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StarsContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
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
