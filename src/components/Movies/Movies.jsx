import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Box from 'components/Box/Box';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/axios';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    setQuery(query);
  }, [searchParams]);

  useEffect(() => {
    const fetch = async () => {
      if (!query) return;
      const data = await fetchMoviesByName(query);
      setFilms(data.data.results);
      setSearchParams({ query });
    };
    fetch();
  }, [query, setSearchParams]);
  return (
    <Box textAlign="center" p="20px">
      <SearchForm getQuery={setQuery} />
      {films.length > 0 ? (
        <MoviesList films={films} />
      ) : (
        <Box mt="20px">
          <p>There is no films yet..</p>
        </Box>
      )}
    </Box>
  );
};

export default Movies;
