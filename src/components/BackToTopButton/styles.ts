import styled from 'styled-components';

export const BackToTopButtonContainer = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent};
  font-size: 2.4rem;
  border: none;
  padding: 0.8rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  transform: translateY(100%);
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
