export const config = {
  api_base_url: 'https://api.themoviedb.org/3/',
  image_base_url: 'https://image.tmdb.org/t/p/',
};

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

type MovieCategories = 'popular' | 'top_rated' | 'now_playing' | 'upcoming';

type TVCategories = 'popular' | 'top_rated' | 'airing_today' | 'on_the_air';

export const getListURL = (
  mediaType: 'movie' | 'tv',
  category: MovieCategories | TVCategories,
  page = '1',
) => {
  return `${config.api_base_url}${mediaType}/${category}?language=en-US&page=${page}`;
};

export function checkIfUrlIsValid(
  mediaType: string,
  category: string,
): category is MovieCategories | TVCategories {
  if (mediaType !== 'movie' && mediaType !== 'tv') {
    return false;
  } else if (mediaType === 'movie') {
    return ['popular', 'top_rated', 'now_playing', 'upcoming'].includes(
      category,
    );
  } else {
    return ['popular', 'top_rated', 'airing_today', 'on_the_air'].includes(
      category,
    );
  }
}

export const getSearchURL = (query: string, page = '1') => {
  return `${config.api_base_url}search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`;
};

export const getItemDetailsURL = (type: 'movie' | 'tv', id: string) => {
  return `${config.api_base_url}${type}/${id}?language=en-US`;
};
