import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import { SearchPage } from '../pages/SearchPage';
import { ShowError } from '../components/Error';
import { ItemPage } from '../pages/ItemPage';
import { ListPage } from '../pages/ListPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/movies/popular" />} />
        <Route path="movies/:category" element={<ListPage />} />
        <Route path="tvshows/:category" element={<ListPage />} />
        <Route path="title/:id" element={<ItemPage />} />{' '}
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="*" element={<ShowError />} />
      </Route>
    </Routes>
  );
};
