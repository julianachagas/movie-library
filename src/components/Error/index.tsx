import { StyledLink } from '../../styles/global';
import NotFound from '../../assets/not-found.svg';
import Empty from '../../assets/empty.svg';
import { ErrorContainer } from './styles';
import { House } from 'phosphor-react';

interface ErrorProps {
  message?: string;
  query?: string;
}

export const ShowError = (props: ErrorProps) => {
  return (
    <section>
      <ErrorContainer>
        <p>Sorry!</p>
        {props.message && <p>{props.message}</p>}
        {props.query && <p>There were no results for {props.query}.</p>}
        {!props.query && !props.message && <p>Page Not Found.</p>}
        <div>
          {props.query || props.message ? (
            <img src={Empty} alt="" width={450} height={336} />
          ) : (
            <img src={NotFound} alt="" width={450} height={299} />
          )}
        </div>
        <StyledLink to="/movies/popular">
          <House />
          Home
        </StyledLink>
      </ErrorContainer>
    </section>
  );
};
