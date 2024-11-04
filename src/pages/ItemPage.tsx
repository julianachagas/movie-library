import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import React from 'react';
import { getItemDetailsURL, options } from '../api/tmdb';
import { Loader } from '../components/Loader';
import { ShowError } from '../components/Error';
import { useFetch } from '../hooks/useFetch';
import {
  ItemData,
  ItemDataAPI,
  normalizeItemData,
} from '../helpers/normalizeData';
import { Item } from '../components/Item';
import { checkInterface } from '../helpers/checkInterface';

export const ItemPage = () => {
  const { id } = useParams();
  const { data, request, loading, error } = useFetch();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [normalizedData, setNormalizedData] = React.useState<ItemData | null>(
    null,
  );
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    const type = searchParams.get('type');
    if (id && (type === 'movie' || type === 'tv')) {
      setNotFound(false);
      setNormalizedData(null);
      const url = getItemDetailsURL(type, id);
      request({ url, options });
    } else {
      setNotFound(true);
    }
  }, [id, request, pathname, searchParams]);

  React.useEffect(() => {
    if (
      checkInterface<ItemDataAPI>(
        data,
        'id',
        'homepage',
        'genres',
        'overview',
        'poster_path',
        'vote_average',
      )
    )
      setNormalizedData(normalizeItemData(data));
  }, [data]);

  if (loading) return <Loader />;

  if (error) return <ShowError message={error} />;

  if (notFound) return <ShowError />;

  if (normalizedData) {
    return <Item {...normalizedData}></Item>;
  }
  return null;
};
