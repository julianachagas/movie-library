import styled from 'styled-components';

export const SidebarContainer = styled.article`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 250px;
  min-height: 100vh;
  height: 100%;
  border-right: 1px solid ${props => props.theme.colors.separator};
  width: 250px;
  background-color: ${props => props.theme.colors.primary};
  transition: transform 0.3s ease, visibility 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding: 4.5rem 3rem 0.5rem;
  overflow-y: auto;
  .logo {
    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    span {
      font-size: 2.2rem;
      font-weight: 600;
    }
    svg {
      font-size: 3rem;
      color: ${props => props.theme.colors.accent};
    }
  }

  nav p {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
    &:nth-of-type(2) {
      margin-top: 3.6rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${props => props.theme.colors.white_70};
      &.active {
        color: ${props => props.theme.colors.white};
        svg {
          color: ${props => props.theme.colors.accent};
        }
      }
      &:not(.active):hover {
        color: ${props => props.theme.colors.white};
        svg {
          color: currentColor;
        }
      }
      svg {
        font-size: 2.2rem;
      }
    }
    li:nth-child(1),
    li:nth-child(2) {
      a.active svg > path {
        fill: ${props => props.theme.colors.accent};
        stroke: ${props => props.theme.colors.accent};
      }
    }
  }

  footer {
    margin-top: auto;
    text-align: center;
    line-height: 1.5;
    p {
      font-size: 1.4rem;
      color: ${props => props.theme.colors.white_70};
    }

    img {
      width: 135px;
      display: block;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    a:hover {
      text-decoration: underline;
      color: ${props => props.theme.colors.white};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    z-index: initial;
    .logo {
      display: none;
    }
    transform: translateX(-100%);
    visibility: hidden;
    border-right: none;
    padding-top: 10rem;
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    &.active {
      transform: translateX(0%);
      visibility: visible;
    }
  }
`;
