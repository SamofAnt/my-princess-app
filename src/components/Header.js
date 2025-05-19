import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 22px; /* Увеличенный шрифт */
  font-weight: bold;
  margin: 0 25px;
  transition: color 0.3s;
  color: ${props => (props.active ? 'gold' : 'white')}; /* Золотой цвет для активной ссылки */

  &:hover {
    color: gold;
    transform: scale(1.1);
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <Navbar>
      <StyledLink to="/" active={location.pathname === "/"}>Home</StyledLink>
      <StyledLink to="/collage" active={location.pathname === "/collage"}>Gallery</StyledLink>
      <StyledLink to="/comic" active={location.pathname === "/comic"}>Comic</StyledLink>
      <StyledLink to="/timeline" active={location.pathname === "/timeline"}>Time Line</StyledLink>
      
    </Navbar>
  );
};

export default Header;
