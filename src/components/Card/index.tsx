import { Star } from 'phosphor-react';
import { CardContainer } from './styles';
import { Poster } from '../Poster';
import { parseISO } from 'date-fns';

export interface CardProps {
  id: number;
  title: string;
  poster: string | null;
  rating: string;
  releaseDate: string | null;
}

export const Card = (props: CardProps) => {
  return (
    <CardContainer>
      <Poster poster={props.poster} alt={props.title} />
      <div className="content">
        <p className="title">{props.title}</p>
        {props.releaseDate && (
          <p>{parseISO(props.releaseDate).getFullYear()}</p>
        )}
        {!props.releaseDate && <p>-</p>}
        <div>
          <Star weight="fill" />
          <span>{props.rating}</span>
        </div>
      </div>
    </CardContainer>
  );
};
