import styled from 'styled-components';

interface PaginationContainerProps {
  page: string;
}

export const PaginationContainer = styled.div<PaginationContainerProps>`
  display: flex;
  align-items: center;
  //first page: only "next" link, flex-end
  //last page: only "back" link, flex-start
  //other pages: both links, space-between
  justify-content: ${props => {
    if (props.page === 'first') {
      return 'flex-end';
    } else if (props.page === 'last') {
      return 'flex-start';
    } else {
      return 'space-between';
    }
  }};
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    gap: 1rem;
  }
`;
