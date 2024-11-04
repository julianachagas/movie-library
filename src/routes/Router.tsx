import { Routes, Route, Navigate } from 'react-router-dom';
import { SearchPage } from '../pages/SearchPage';
import { ShowError } from '../components/Error';
import { ItemPage } from '../pages/ItemPage';
import { ListPage } from '../pages/ListPage';
import { RootLayout } from '../layouts/RootLayout';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Navigate to="/movies/popular" />} />
        <Route path="movies/:category" element={<ListPage />} />
        <Route path="tvseries/:category" element={<ListPage />} />
        <Route path="title/:id" element={<ItemPage />} />{' '}
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="*" element={<ShowError />} />
      </Route>
    </Routes>
  );
};
