import { Link, useParams, useSearchParams } from 'react-router-dom';
import React from 'react';
import { options } from '../api/tmdb';
import { getSearchURL } from '../api/tmdb';
import { ListContainer } from '../styles/global';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { ShowError } from '../components/Error';
import { useFetch } from '../hooks/useFetch';
import {
  ListData,
  ListDataAPI,
  normalizeListData,
} from '../helpers/normalizeData';
import { checkInterface } from '../helpers/checkInterface';
import { Pagination } from '../components/Pagination';

export const SearchPage = () => {
  const { query } = useParams();
  const [notFound, setNotFound] = React.useState(false);
  const { data, request, loading, error } = useFetch();
  const [normalizedData, setNormalizedData] = React.useState<ListData | null>(
    null,
  );
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const page = searchParams.get('page') || '1';
    if (query) {
      setNormalizedData(null);
      const url = getSearchURL(query, page);
      request({ url, options });
    }
  }, [query, request, searchParams]);

  React.useEffect(() => {
    if (
      checkInterface<ListDataAPI>(
        data,
        'page',
        'results',
        'total_pages',
        'total_results',
      )
    ) {
      if (data.page <= data.total_pages) {
        setNotFound(false);
        setNormalizedData(normalizeListData(data));
      } else {
        setNotFound(true);
      }
    }
  }, [data]);

  if (loading) return <Loader />;

  if (notFound) return <ShowError />;

  if (!normalizedData) return null;

  if (error || !normalizedData?.results.length)
    return <ShowError query={query} />;

  return (
    <section>
      <p>Search results</p>
      <h1>{query}</h1>
      <ListContainer>
        {normalizedData.results.map(item => (
          <Link to={`/title/${item.id}?type=${item.mediaType}`} key={item.id}>
            <Card {...item} />
          </Link>
        ))}
      </ListContainer>
      <Pagination
        currentPage={normalizedData.page}
        totalPages={normalizedData.total_pages}
      />
    </section>
  );
};
