import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const timelineData = [
  { 
    date: "26 February, 2024", 
    title: "You added me on SnapChat \n(Yes, it was you who made the first step 🙄)" 
  },
  { 
    date: "1 March, 2024", 
    title: "You were bothering me while I was doing backwash" 
  },
  { 
    date: "5 April, 2024", 
    title: "I texted you about Avatar and we started talking every day since then" 
  },
  { 
    date: "3 May, 2024", 
    title: "You asked me out and we went to GO station (Again your move 🙄)" 
  },
  { 
    date: "31 May, 2024", 
    title: "We went to the movies first time" 
  },
  { 
    date: "3 June, 2024", 
    title: "I became the happiest guy in the world" 
  },
  { 
    date: "9 August, 2024", 
    title: "I was given my second change and I'm still grateful for it" 
  },
  { 
    date: "22 October, 2024", 
    title: "You became my official girlfriend" 
  },
  { 
    date: "13 February, 2025", 
    title: "Our first trip to Niagara Falls" 
  },
  { 
    date: "14 February, 2025", 
    title: "Our first Valentine's Day" 
  },
  { 
    date: new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
    title: "Continuing our journey..."
  }
];


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Основной контейнер таймлайна с адаптивными отступами
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Обертка для элементов таймлайна
const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// События таймлайна с адаптивной шириной и размером шрифтов
const TimelineEvent = styled.div`
  position: relative;
  background: linear-gradient(45deg, #ffecd2, #fcb69f);
  padding: 15px 25px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(255, 180, 120, 0.3);
  width: 60%;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(255, 140, 80, 0.5);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

// Линии между событиями
const TimelineLine = styled.div`
  width: 4px;
  height: 50px;
  background: linear-gradient(180deg, #ff4500, #ffd700);
  margin: -10px auto;
  border-radius: 2px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

// Стиль для даты события
const DateTL = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ff4500;
`;

// Заголовок события
const Title = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Timeline = () => {
  const [visibleEvents, setVisibleEvents] = useState([0]); // Изначально видим только первое событие

  const revealNextEvent = () => {
    setVisibleEvents((prev) => {
      const nextIndex = prev.length;
      return nextIndex < timelineData.length ? [...prev, nextIndex] : prev;
    });
  };

  return (
    <TimelineContainer>
      <h2>Our Time Line</h2>
      <TimelineWrapper>
        {timelineData.map((event, index) => (
          <React.Fragment key={index}>
            <TimelineEvent
              isVisible={visibleEvents.includes(index)}
              onClick={visibleEvents.includes(index) ? revealNextEvent : undefined}
            >
              <DateTL>{event.date}</DateTL>
              <Title>{event.title}</Title>
            </TimelineEvent>
            {index < timelineData.length - 1 && (
              <TimelineLine isVisible={visibleEvents.includes(index + 1)} />
            )}
          </React.Fragment>
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default Timeline;
