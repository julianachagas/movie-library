import imagePlaceholder from '../../assets/image-placeholder.png';
import { config } from '../../api/tmdb';
import { ImageContainer } from './styles';
import React from 'react';

interface PosterProps {
  poster: string | null;
  alt: string;
  single?: boolean;
}

export const Poster = (props: PosterProps) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.style.opacity = '1';
    setSkeleton(false);
  }

  return (
    <ImageContainer className={props.poster === null ? 'placeholder' : ''}>
      {skeleton && <div className="skeleton"></div>}
      {!props.poster && (
        <img
          src={imagePlaceholder}
          alt={props.alt}
          onLoad={handleLoad}
          width={342}
          height={513}
        />
      )}
      {props.poster && (
        <img
          srcSet={
            props.single
              ? `${config.image_base_url}w780${props.poster} 2x, ${config.image_base_url}original${props.poster} 3x`
              : ''
          }
          src={`${config.image_base_url}w342${props.poster}`}
          alt={props.alt}
          onLoad={handleLoad}
          width={342}
          height={513}
        />
      )}
    </ImageContainer>
  );
};
