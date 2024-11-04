import { useNavigate } from 'react-router-dom';
import { ItemContainer } from './styles';
import { ChartLineUp, Star, TelevisionSimple } from 'phosphor-react';
import { ArrowLeft, Link, Calendar, Clock } from 'phosphor-react';
import { ItemData } from '../../helpers/normalizeData';
import { Poster } from '../Poster';
import { StyledButton } from '../../styles/global';
import { format, isAfter, parseISO } from 'date-fns';

export function Item(props: ItemData) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <ItemContainer>
      <div className="content">
        <Poster
          poster={props.poster}
          alt={props.title ? props.title : ''}
          single={true}
        />
        <div>
          <div className="rating">
            <Star weight="fill" />
            <span>{props.rating === '0.0' ? '-' : props.rating}</span>
          </div>
          <h1>{props.title}</h1>
          {props.releaseDate && (
            <p>{parseISO(props.releaseDate).getFullYear()}</p>
          )}
          <p className="genres">
            {props.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
          <p className="overview">{props.overview}</p>
          {props.runtime && (
            <p className="stats">
              <Clock />
              <span>Runtime: </span>
              <span>{props.runtime} min</span>
            </p>
          )}
          {props.seasons && (
            <p className="stats">
              <TelevisionSimple />
              <span>Seasons:</span>
              <span>{props.seasons}</span>
              <span>| Episodes:</span>
              <span>{props.episodes}</span>
            </p>
          )}
          {props.status && (
            <p className="stats">
              <ChartLineUp />
              <span>Status:</span>
              <span>
                {props.status === 'Released' &&
                props.releaseDate &&
                isAfter(parseISO(props.releaseDate), new Date())
                  ? 'To be Released'
                  : props.status}
              </span>
            </p>
          )}
          <p className="stats">
            <Calendar />
            <span>Release Date: </span>
            <span>
              {props.releaseDate
                ? format(parseISO(props.releaseDate), 'dd/MM/yyyy')
                : '-'}
            </span>
          </p>
          {props.lastAirDate && (
            <p className="stats">
              <Calendar />
              <span>Last Air Date: </span>
              <span>{new Date(props.lastAirDate).toLocaleDateString()}</span>
            </p>
          )}
          <div className="links-wrapper">
            {props.homepage && (
              <a
                href={props.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link />
                Website
              </a>
            )}
            {props.imdb && (
              <a
                href={`https://www.imdb.com/title/${props.imdb}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link />
                IMDb
              </a>
            )}
          </div>
        </div>
      </div>
      <StyledButton onClick={goBack}>
        <ArrowLeft />
        Back
      </StyledButton>
    </ItemContainer>
  );
}
