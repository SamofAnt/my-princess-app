import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: black;
  display: flex;
  justify-content: space-between; /* Распределяем элементы по краям */
  align-items: center;
  padding: 15px 20px;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: black;
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    overflow: hidden;
    max-height: ${({ open }) => (open ? '300px' : '0')};
    padding: ${({ open }) => (open ? '10px 0' : '0 0')};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  margin: 0 25px;
  transition: color 0.3s, transform 0.3s;
  color: ${({ active }) => (active ? 'gold' : 'white')};

  &:hover {
    color: gold;
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 10px 0;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerLines = styled.div`
  width: 25px;
  height: 3px;
  background: white;
  margin: 5px 0;
  transition: all 0.3s;
`;

// Компонент Header с бургер-меню
const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <Navbar>
      <Burger onClick={toggleMenu}>
        <BurgerLines />
        <BurgerLines />
        <BurgerLines />
      </Burger>
      <NavLinksContainer open={menuOpen}>
        <StyledLink 
          to="/" 
          active={location.pathname === "/home"} 
          onClick={() => setMenuOpen(false)}
        >
          Home
        </StyledLink>
        <StyledLink 
          to="/collage" 
          active={location.pathname === "/collage"} 
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </StyledLink>
        <StyledLink 
          to="/comic" 
          active={location.pathname === "/comic"}
          onClick={() => setMenuOpen(false)}
        >
          Comic
        </StyledLink>
        <StyledLink 
          to="/timeline" 
          active={location.pathname === "/timeline"}
          onClick={() => setMenuOpen(false)}
        >
          Time Line
        </StyledLink>
        <StyledLink 
          to="/love-messages" 
          active={location.pathname === "/love-messages"}
          onClick={() => setMenuOpen(false)}
        >
          My feelings
        </StyledLink>
      </NavLinksContainer>
      <MusicPlayer />
    </Navbar>
  );
};

export default Header;
