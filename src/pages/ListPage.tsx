import {
  Link,
  useParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import React from 'react';
import { checkIfUrlIsValid, getListURL, options } from '../api/tmdb';
import { Card } from '../components/Card';
import { ListContainer } from '../styles/global';
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

export const ListPage = () => {
  const { category } = useParams();
  const [notFound, setNotFound] = React.useState(false);
  const { data, request, loading, error } = useFetch();
  const [normalizedData, setNormalizedData] = React.useState<ListData | null>(
    null,
  );
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const mediaType =
    pathname === `/movies/${category}`
      ? 'movie'
      : pathname === `/tvseries/${category}`
      ? 'tv'
      : null;

  React.useEffect(() => {
    const page = searchParams.get('page') || '1';

    if (!category) {
      setNotFound(true);
    } else if (mediaType && checkIfUrlIsValid(mediaType, category)) {
      setNotFound(false);
      setNormalizedData(null);
      const url = getListURL(mediaType, category, page);
      request({ url, options });
    } else {
      setNotFound(true);
    }
  }, [request, category, pathname, mediaType, searchParams]);

  React.useEffect(() => {
    // before normalizing the data from the API check if the interface is what we expect
    if (
      checkInterface<ListDataAPI>(
        data,
        'page',
        'results',
        'total_pages',
        'total_results',
      )
    ) {
      setNormalizedData(normalizeListData(data));
    }
  }, [data]);

  if (loading) return <Loader />;

  if (error) return <ShowError message={error} />;

  if (notFound) return <ShowError />;

  if (!normalizedData) return null;

  if (!normalizedData.results.length) return <ShowError />;

  return (
    <section>
      <p>{mediaType === 'movie' ? 'Movies' : 'TV Shows'}</p>
      <h1>
        {category?.includes('on_the_air')
          ? 'Airing Soon'
          : category?.replace(/_/g, ' ')}{' '}
      </h1>
      <ListContainer>
        {normalizedData.results.map(item => (
          <Link to={`/title/${item.id}?type=${mediaType}`} key={item.id}>
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
