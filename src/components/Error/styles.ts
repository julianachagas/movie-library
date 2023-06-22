import styled from 'styled-components';

export const ErrorContainer = styled.div`
  text-align: center;
  p:first-child {
    font-size: 3rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.5;
  }
  div {
    padding-block: 3rem 5rem;
    max-width: 450px;
    margin: 0 auto;
    height: auto;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;
