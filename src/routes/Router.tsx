import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import { MoviesList } from '../components/MoviesList';
import { Movie } from '../components/Movie';
import { TvSeries } from '../components/TvSeries';
import { Search } from '../components/Search';
import { TvList } from '../components/TvList';
import { ShowError } from '../components/Error';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/movies/popular" />} />
        <Route path="movies/:name" element={<MoviesList />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="tvseries/:name" element={<TvList />} />
        <Route path="tv/:id" element={<TvSeries />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="*" element={<ShowError />} />
      </Route>
    </Routes>
  );
};
