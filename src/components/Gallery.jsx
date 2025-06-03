import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
// import ScrollText from './ScrollPhrases'; // Если нужен



const data = [
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-1.jpeg`,
    caption: "The glasses suit you very well"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-2.jpeg`,
    caption: "You made me happy with your arrival"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-1.mp4`,
    caption: "I will never forget this Halloween"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-3.jpeg`,
    caption: "It's an unforgettable feeling to feel your lips"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-2.mp4`,
    caption: "I love your smile"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-4.jpeg`,
    caption: "You were insanely beautiful that day"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-5.jpeg`,
    caption: "I was very nervous"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-6.jpeg`,
    caption: "I fell in love"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-7.jpeg`,
    caption: "I love your photos"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-8.jpeg`,
    caption: "We should go to wonderland again!"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-9.jpeg`,
    caption: "We are very cute"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-3.mp4`,
    caption: "YOUR SMILE IS AMAZING"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-4.mp4`,
    caption: "Oh... you don't love me like I"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-5.mp4`,
    caption: "Your eyes are amazing"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-10.jpeg`,
    caption: "I want to kiss you every day"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-11.jpeg`,
    caption: "You are very cute here"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-12.jpeg`,
    caption: "It was a very beautiful place that you showed me"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-13.jpeg`,
    caption: "I am incredibly lucky"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-14.jpeg`,
    caption: "😛"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-6.mp4`,
    caption: "I love our nights at the movies"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-7.mp4`,
    caption: "This was a really cool idea (YOURS)"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-15.jpeg`,
    caption: "YOU ARE CRAZY BEAUTIFUL"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-16.jpeg`,
    caption: "YOU ARE CRAZY BEAUTIFUL"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-18.jpeg`,
    caption: "Our one of the best photos"
  },
  {
    type: "video",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/video-8.mp4`,
    caption: "You play better every time!"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-19.jpeg`,
    caption: "This is a very sexy photo"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-20.jpeg`,
    caption: "I want to spend more nights like this with you."
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-21.jpeg`,
    caption: "This is cute"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-22.jpeg`,
    caption: "LAY DOWN ON ME MORE"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-23.jpeg`,
    caption: "Did you know that you were very beautiful?"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-24.jpeg`,
    caption: "MWAH"
  },
  {
    type: "photo",
    src: `${process.env.PUBLIC_URL}/gallery-imgs/photo-25.jpeg`,
    caption: "YOU ARE VERY COMFORTABLE"
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
  cursor: pointer; /* курсор-указатель для интерактивности */

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

// Модальное оверлей-окно для полноэкранного просмотра фотографии
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

// Модальное окно для изображения
const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
`;

// Кнопка закрытия модального окна
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  background: transparent;
  border: none;
  font-size: 32px;
  cursor: pointer;
`;

const MediaCollage = () => {
  const [media, setMedia] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Стейт для выбранной фотографии

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

  // Обработка клика по фотографии для открытия модального окна
  const openModal = (item) => {
    if (item.type === "photo") {
      setSelectedPhoto(item);
    }
  };

  // Закрытие модального окна
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
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
                    onClick={() => openModal(item)}
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
      
      {/* Модальное окно для полноэкранного отображения фотографии */}
      {selectedPhoto && (
        <ModalOverlay onClick={closeModal}>
          <CloseButton onClick={(e) => { e.stopPropagation(); closeModal(); }}>
            &times;
          </CloseButton>
          <ModalImage src={selectedPhoto.src} alt="Полноэкранное фото" onClick={(e) => e.stopPropagation()} />
        </ModalOverlay>
      )}
    </>
  );
};

export default MediaCollage;
