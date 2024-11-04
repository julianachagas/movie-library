import styled from 'styled-components';

export const ItemContainer = styled.section`
  margin-bottom: 5rem;
  h1 {
    margin-block: 1rem;
  }

  .content {
    display: grid;
    grid-template-columns: 342px 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 4rem;
    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      color: ${props => props.theme.colors.white_70};
      svg {
        color: ${props => props.theme.colors.yellow};
        font-size: 1.6rem;
      }
    }

    p:first-of-type,
    .genres {
      color: ${props => props.theme.colors.white_70};
      font-size: 1.5rem;
      line-height: 1.5;
    }

    .genres span:not(:last-child)::after {
      content: ' | ';
    }

    .overview {
      margin-block: 2rem;
      line-height: 1.3;
      text-align: justify;
    }

    .stats {
      line-height: 1.8;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      span:first-of-type {
        font-weight: 500;
      }
      svg {
        font-size: 2rem;
        color: ${props => props.theme.colors.accent};
      }
    }

    .links-wrapper {
      display: flex;
      margin-block: 3rem;
      gap: 2rem;
      a {
        font-size: 1.3rem;
        background-color: transparent;
        transition: all 0.3s ease-in-out;
        border: 1px solid ${props => props.theme.colors.white};
        padding: 0.8rem 2rem;
        max-width: initial;
        margin: initial;
        border-radius: 50px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        svg {
          font-size: 1.6rem;
        }
        &:focus-visible {
          background-color: ${props => props.theme.colors.white};
          color: ${props => props.theme.colors.primary};
        }
        &:hover:not(:focus-visible) {
          background-color: ${props => props.theme.colors.gray};
          color: ${props => props.theme.colors.white};
          border-color: transparent;
          transform: translateY(-3px);
        }
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-bottom: 0;
    .content {
      gap: 4rem;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.small}) {
    .content {
      margin-bottom: 0;
      grid-template-columns: 1fr;
      grid-template-rows: 450px auto;
      div:first-child {
        max-width: 300px;
        justify-self: center;
      }
    }
  }
`;
