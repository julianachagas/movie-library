import styled from 'styled-components';

export const LoaderContainer = styled.div`
  text-align: center;
  margin-block: 4rem;
  p {
    margin-top: 2rem;
    font-size: 1.8rem;
  }
  svg {
    animation: spin 2.5s infinite;
  }

  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
