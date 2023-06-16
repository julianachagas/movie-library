import { Link } from 'react-router-dom';
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;   
    font-family: 'Outfit', sans-serif; 
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input {
    font: inherit;
    color: inherit;
  }

  ul {
    list-style: none;
  } 

  .lock-scroll {
    overflow: hidden;    
  }

  body.lock-scroll main {
    visibility: hidden;
  }

  img {
    max-width: 100%;
    display: block;
  }  
`;

const buttonAndLinkStyles = css`
  cursor: pointer;
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.white};
  border-radius: 50px;
  font-weight: 500;
  padding: 0.8rem 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  svg {
    font-size: 1.8rem;
  }

  &:focus-visible {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
  }
  &:hover:not(:focus-visible) {
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    border-color: currentColor;
    transform: translateY(-3px);
  }
`;

export const StyledLink = styled(Link)`
  ${buttonAndLinkStyles}
`;

export const StyledButton = styled.button`
  ${buttonAndLinkStyles}
`;

export const MainContainer = styled.main`
  margin-left: 25rem;
  padding: 12rem 7rem 1rem;
  section > p {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white_70};
    margin-bottom: 0.5rem;
    letter-spacing: 0.15rem;
  }

  h1 {
    text-transform: capitalize;
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      border-radius: 5px;
      height: 2.8rem;
      background-color: ${props => props.theme.colors.accent};
      flex-shrink: 0;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 10rem 3rem 6rem;
    margin-left: 0;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 26.2rem));
  gap: 5rem;
  margin-block: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.large}) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 23rem));
    gap: 4rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 20rem));
    justify-content: space-evenly;
  }

  @media (max-width: ${props => props.theme.breakpoints.small}) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 3rem;
  }
`;
