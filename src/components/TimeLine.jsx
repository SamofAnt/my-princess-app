import React from 'react';
import styled, { keyframes } from 'styled-components';
import LoveFlower from './LoveFlower';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TimelineEvent = styled.div`
  position: relative;
  background: linear-gradient(45deg, #ffecd2, #fcb69f);
  padding: 15px 25px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(255, 180, 120, 0.3);
  width: 60%;
  margin-bottom: 25px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 1s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(255, 140, 80, 0.5);
  }
`;

const Date = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ff4500;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
`;

const timelineData = [
  { date: "10 июля 2020", title: "Первое свидание" },
  { date: "14 февраля 2021", title: "Наш первый День святого Валентина" },
  { date: "25 августа 2022", title: "Совместное путешествие на море" },
  { date: "3 ноября 2023", title: "Предложение руки и сердца" },
  { date: "18 июня 2024", title: "День свадьбы" },
];

const Timeline = () => {
  return (
    <TimelineContainer>
    <LoveFlower/>
      <h2 style={{ color: "#ff4500", textAlign: "center" }}>💖 Таймлайн нашей любви</h2>
      <TimelineWrapper>
        {timelineData.map((event, index) => (
          <TimelineEvent key={index}>
            <Date>{event.date}</Date>
            <Title>{event.title}</Title>
          </TimelineEvent>
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default Timeline;
