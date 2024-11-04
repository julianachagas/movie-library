interface Genres {
  name: string;
  id: number;
}

export interface ItemDataAPI {
  id: number;
  homepage: string;
  genres: Genres[];
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date?: string;
  runtime?: number;
  title?: string;
  imdb_id?: string;
  first_air_date?: string;
  last_air_date?: string;
  name?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  status?: string;
}

export function normalizeItemData(data: ItemDataAPI) {
  return {
    id: data.id,
    homepage: data.homepage,
    genres: data.genres,
    overview: data.overview,
    poster: data.poster_path,
    rating: data.vote_average
      ? data.vote_average.toFixed(1).padEnd(3, '.0')
      : '-',
    title: data.title || data.name,
    releaseDate: data.release_date || data.first_air_date || null,
    runtime: data.runtime || null,
    imdb: data.imdb_id || null,
    firstAirDate: data.first_air_date || null,
    lastAirDate: data.last_air_date || null,
    episodes: data.number_of_episodes || null,
    seasons: data.number_of_seasons || null,
    status: data.status || null,
  };
}

export type ItemData = ReturnType<typeof normalizeItemData>;

interface Results {
  id: number;
  name?: string;
  title?: string;
  poster_path?: string | null;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
  media_type?: 'movie' | 'tv' | 'person';
}

export interface ListDataAPI {
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

export function normalizeListData(data: ListDataAPI) {
  const results = data.results
    .filter(item => {
      if (!item.media_type) return true;
      return item.media_type !== 'person';
    })
    .map(item => ({
      id: item.id,
      title: item.title || item.name || '',
      poster: item.poster_path || null,
      rating: item.vote_average
        ? item.vote_average.toFixed(1).padEnd(3, '.0')
        : '-',
      releaseDate: item.release_date || item.first_air_date || null,
      mediaType: item.media_type || null,
    }));
  return { ...data, results };
}

export type ListData = ReturnType<typeof normalizeListData>;
