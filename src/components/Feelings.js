import React from 'react';
import styled, { keyframes } from 'styled-components';

// Анимация появления (сдвиг вверх и плавное появление)
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Пульсирующий эффект для декоративного градиента
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// Обёртка всей страницы: градиентный фон и центрирование контента
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(145deg, #1e3c72, #2a5298);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

// Карточка с текстом: полупрозрачный фон, закругленные углы, тень и эффект размытия заднего плана
const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  animation: ${fadeInUp} 1s ease-out both;
  border: 1px solid rgba(255, 255, 255, 0.4);
  overflow: hidden;
  
  /* Декоративный псевдоэлемент с пульсирующим радиальным градиентом */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 60%);
    transform: rotate(25deg);
    pointer-events: none;
    animation: ${pulse} 6s ease-in-out infinite;
  }
`;

// Заголовок страницы с крупным шрифтом и изящным шрифтом-serif
const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #2a2a2a;
  margin-bottom: 30px;
  font-family: 'Playfair Display', serif;
`;

// Основной текст с улучшенной типографикой: больший межстрочный интервал и аккуратно оформленные абзацы
const Content = styled.article`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  font-family: 'Open Sans', sans-serif;
  
  p {
    margin-bottom: 20px;
    text-indent: 2em;
  }
  
  blockquote {
    font-size: 1.4rem;
    font-style: italic;
    margin: 30px 20px;
    padding-left: 20px;
    border-left: 4px solid #ccc;
    color: #555;
  }
`;

const FeelingsPage = () => {
  return (
    <PageContainer>
      <Card>
        <Title>About My Feelings</Title>
        <Content>
          <p>
          Since the moment you stepped into my life, every second has been filled with magic. Your words, your voice, your smile — they make my heart race.
          </p>
          <p>
          Each day I wake up with thoughts of you and a hope that today will bring us even more cherished memories. You changed me for the better and i am grateful to you for that.
          </p>
          <blockquote>
            "Love is not just a feeling. Love is art and science, magic and reality, a dream and destiny."
          </blockquote>
          <p>
          Since the day you asked me to hang out, so much has changed — our bond has grown deeper and stronger. I want everything you see now to be a reminder of how much you truly mean to me.
          </p>
          <p>
          Thank you for being you. You fill my life with richness, beauty, and meaning.I dream of our days together — every moment, every smile — and I can't wait to live them all with you.
          </p>
          <p>I Love You 💖</p>
        </Content>
      </Card>
    </PageContainer>
  );
};

export default FeelingsPage;
