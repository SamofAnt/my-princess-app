import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MessageContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

const MessageBlock = styled.div`
  font-size: 24px;
  color: white;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0px" : "30px")});
  transition: opacity 1s ease, transform 1s ease;
  margin-bottom: 30px;
`;

const loveMessages = [
  "Ты — самое прекрасное, что произошло в моей жизни...",
  "Каждый день с тобой — это волшебство, наполненное любовью...",
  "Я благодарен судьбе за каждый миг, проведённый рядом с тобой...",
  "Ты — моя вселенная, мой свет, моя мечта...",
  "Без тебя моя жизнь была бы пустой. Я люблю тебя бесконечно...",
];

const LoveMessages = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const index = Math.floor(scrollPosition / 300) % loveMessages.length;
      setVisibleIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MessageContainer>
      {loveMessages.map((message, index) => (
        <MessageBlock key={index} isVisible={index <= visibleIndex}>
          {message}
        </MessageBlock>
      ))}
    </MessageContainer>
  );
};

export default LoveMessages;
