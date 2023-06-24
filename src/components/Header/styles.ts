import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-right: 7rem;
  padding-block: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 1;
  &.fixed {
    position: fixed;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .toggle-menu,
  .open-form {
    display: none;
  }

  .logo {
    visibility: hidden;
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

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 2rem 3rem;

    .logo {
      visibility: visible;
    }

    .toggle-menu,
    .open-form {
      display: flex;
      align-items: center;
      width: 45px;
      height: 45px;
    }

    .toggle-menu {
      justify-content: start;
      div {
        width: 25px;
        height: 25px;
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        transition: all 0.4s ease-in-out;
      }
      span {
        background-color: ${props => props.theme.colors.gray};
        display: inline-block;
        width: 100%;
        height: 3px;
        border-radius: 5px;
        transition: all 0.4s ease-in-out;
      }

      span:not(:last-child) {
        margin-bottom: 5px;
      }

      &.active div {
        transition-delay: 0.8s;
        transform: rotate(45deg);
        span:nth-child(2) {
          width: 0;
        }
        span:nth-child(1),
        span:nth-child(3) {
          transition-delay: 0.4s;
        }
        span:nth-child(1) {
          transform: translateY(9px);
        }

        span:nth-child(3) {
          transform: translateY(-7px) rotate(90deg);
        }
      }
    }

    .open-form {
      justify-content: center;
      color: ${props => props.theme.colors.gray};
      svg {
        font-size: 2.2rem;
      }
    }
  }
`;

export const FormContainer = styled.div`
  .visually-hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    border: 0;
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
  }

  div {
    position: relative;
  }

  .close-form {
    display: none;
  }

  form button {
    position: absolute;
    right: 7px;
    top: 55%;
    color: ${props => props.theme.colors.gray};
    transform: translateY(-50%);
    svg {
      font-size: 2rem;
    }
  }

  input {
    border: none;
    padding: 1rem 3rem 1rem 1.5rem;
    border-radius: 5px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    display: none;

    &.mobile-form {
      background-color: ${props => props.theme.colors.primary};
      position: absolute;
      top: 0;
      left: 0;
      padding: 2rem 3rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.2rem;

      form {
        flex: 1;
      }

      input {
        width: 100%;
      }

      .close-form {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.gray};
        svg {
          font-size: 2.8rem;
        }
      }
    }
  }
`;
