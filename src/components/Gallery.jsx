import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
// import ScrollText from './ScrollPhrases'; // Если нужен



const data = [
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-1.jpeg`,
    caption: "Наш первый день вместе"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-2.jpeg`,
    caption: "Незабываемый вечер под звездами"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-1.mp4`,
    caption: "Наш первый совместный отпуск"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-3.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-2.mp4`,
    caption: "Самый счастливый день в моей жизни"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-4.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-5.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-6.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-7.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-8.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-9.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-3.mp4`,
    caption: "Наш первый совместный отпуск"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-4.mp4`,
    caption: "Наш первый совместный отпуск"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-5.mp4`,
    caption: "Наш первый совместный отпуск"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-10.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-11.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-12.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-13.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-14.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-6.mp4`,
    caption: "Наш первый совместный отпуск"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-7.mp4`,
    caption: "Наш первый совместный отпуск"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-15.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-16.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-18.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-8.mp4`,
    caption: "Наш первый совместный отпуск"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-19.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-20.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-21.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-22.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-23.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-24.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-25.jpeg`,
    caption: "В этот день ты сказала 'да'"
  },
];
// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const heartPop = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
`;

// Стили контейнера страницы
const PageBackground = styled.div`
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  min-height: 100vh;
  padding: 40px 20px;
`;

// Заголовок страницы
const PageTitle = styled.h1`
  text-align: center;
  font-size: 42px;
  color: white;
  animation: ${fadeIn} 1s ease-out forwards;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
  
  span {
    color: #ffd700;
  }
`;

// Контейнер для сетки медиа (фото и видео)
const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Карточка для отдельного медиа-объекта 
const PhotoFrame = styled.div`
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: ${({ delay }) => delay}s;
  transform-origin: center;

  &:hover {
    z-index: 10;

    img, video {
      animation: ${float} 3s ease-in-out infinite;
    }
  }
`;

// Стили для фотографий
const Photo = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

// Стили для видео – внешний вид максимально схож с фотографиями
const Video = styled.video`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

// Подпись под медиа
const Caption = styled.p`
  text-align: center;
  color: white;
  font-style: italic;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;

  ${PhotoFrame}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Кнопка "лайк" для фотографий
const LikeButton = styled.button`
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  border: none;
  background: white;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transform: scale(0);
  transition: transform 0.3s ease;

  ${PhotoFrame}:hover & {
    transform: scale(1);
  }

  &:hover {
    background: #ffeeee;
  }
`;

// Эффект сердечка
const Heart = styled.div`
  position: absolute;
  color: red;
  font-size: 18px;
  animation: ${heartPop} 1s forwards;
  pointer-events: none;
`;

// Футер
const Footer = styled.footer`
  text-align: center;
  color: white;
  font-size: 14px;
  opacity: 0.7;
  margin-top: 30px;
  padding: 20px;
`;

// Основной компонент медиагалереи
const MediaCollage = () => {
  const [media, setMedia] = useState([]);
  const [hearts, setHearts] = useState([]);

  // Загружаем массив медиа после монтирования
  useEffect(() => {
    setTimeout(() => {
      setMedia(data);
    }, 500);
  }, []);

  // Обработка клика "лайка" (работает только для фото)
  const handleLike = (index, e) => {
    if (media[index].type !== "photo") return; // лайки только для фото

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart = {
      id: uuidv4(),
      x,
      y,
      index
    };

    setHearts(prev => [...prev, newHeart]);

    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1000);
  };

  return (
    <PageBackground>
      <PageTitle>The history of <span>our</span> love</PageTitle>
      <CollageContainer>
        {media.map((item, index) => (
          <PhotoFrame key={index} delay={index * 0.15}>
            {item.type === "photo" ? (
              <>
                <Photo
                  src={item.src}
                  alt={`Фото ${index + 1}`}
                  style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                />
                <Caption>{item.caption}</Caption>
                <LikeButton onClick={(e) => handleLike(index, e)}>
                  ❤️
                  {hearts
                    .filter(h => h.index === index)
                    .map(h => (
                      <Heart
                        key={h.id}
                        style={{ left: `${h.x}px`, top: `${h.y}px` }}
                      >❤️</Heart>
                    ))}
                </LikeButton>
              </>
            ) : item.type === "video" ? (
              <>
                <Video
                  controls
                  src={item.src}
                  style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                />
                <Caption>{item.caption}</Caption>
              </>
            ) : null}
          </PhotoFrame>
        ))}
      </CollageContainer>
      <Footer>
        &copy; {new Date().getFullYear()} Our Love Story. All rights reserved.
      </Footer>
    </PageBackground>
  );
};

export default MediaCollage;
