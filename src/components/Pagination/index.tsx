import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { useLocation } from 'react-router-dom';
import { PaginationContainer } from './styles';
import { StyledLink } from '../../styles/global';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const { pathname } = useLocation();
  const isItTheLastPage = currentPage === totalPages || currentPage === 500;
  const isItTheFirstPage = currentPage === 1;

  return (
    <PaginationContainer
      page={isItTheFirstPage ? 'first' : isItTheLastPage ? 'last' : ''}
    >
      {!isItTheFirstPage && (
        <StyledLink to={`${pathname}?page=${currentPage - 1}`}>
          <ArrowLeft />
          Back
        </StyledLink>
      )}
      {!isItTheLastPage && (
        <StyledLink to={`${pathname}?page=${currentPage + 1}`}>
          Next
          <ArrowRight />
        </StyledLink>
      )}
    </PaginationContainer>
  );
};
