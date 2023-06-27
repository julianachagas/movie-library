import styled from 'styled-components';

export const ImageContainer = styled.div`
  aspect-ratio: 2/3;
  display: grid;
  width: 100%;
  img,
  div {
    grid-area: 1/1;
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
  img {
    object-fit: cover;
    display: block;
    opacity: 0;
    transition: 0.2s;
  }

  &.placeholder {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 7px;
    img {
      object-fit: contain;
      padding: 1rem;
    }
  }

  .skeleton {
    /* background-image: linear-gradient(90deg, #ccc 0px, #ddd 50%, #ccc 100%);
    background-color: #ccc; */
    background-image: linear-gradient(
      90deg,
      #1a1a1a 0px,
      #1c1c1c 50%,
      #1a1a1a 100%
    );
    background-color: #1a1a1a;
    background-size: 200%;
    animation: skeleton 1.8s infinite linear;
  }

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
