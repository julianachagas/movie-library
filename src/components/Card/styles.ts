import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 7px;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  .content {
    text-align: center;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${props => props.theme.colors.white_70};
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }
    .title {
      font-weight: 500;
      color: ${props => props.theme.colors.white};
    }
    svg {
      color: ${props => props.theme.colors.yellow};
      font-size: 1.8rem;
    }
  }

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: scale(1.05);
    img {
      border-radius: 7px 7px 0 0;
    }
  }
`;
