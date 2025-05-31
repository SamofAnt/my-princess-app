import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StoryContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

const StoryEvent = styled.div`
  margin-bottom: 40px;
  animation: ${fadeInUp} 1s ease-in-out;
`;

const Date = styled.span`
  font-size: 18px;
  color: gold;
`;

const Title = styled.h2`
  margin-top: 10px;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
`;

const loveStoryData = [
  { date: "10 июля 2020", title: "Наше первое свидание", image: "/gallery-imgs/photo-1.jpeg" },
  { date: "14 февраля 2021", title: "День святого Валентина вместе", image: "/gallery-imgs/photo-1.jpeg"  },
  { date: "25 августа 2022", title: "Совместное путешествие", image: "/gallery-imgs/photo-1.jpeg"  },
  { date: "3 ноября 2023", title: "Предложение", image: "/gallery-imgs/photo-1.jpeg"  },
  { date: "18 июня 2024", title: "Свадьба", image: "/gallery-imgs/photo-1.jpeg"  },
];

const LoveStory = () => {
  return (
    <StoryContainer>
      <h1 style={{ color: "pink" }}>💖 История нашей любви</h1>
      {loveStoryData.map((event, index) => (
        <StoryEvent key={index}>
          <Date>{event.date}</Date>
          <Title>{event.title}</Title>
          <Image src={event.image} alt={event.title} />
        </StoryEvent>
      ))}
    </StoryContainer>
  );
};

export default LoveStory;
