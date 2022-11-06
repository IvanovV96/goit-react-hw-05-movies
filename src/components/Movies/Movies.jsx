import { useState } from 'react';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Box from 'components/Box/Box';
import { parseDataFromLS } from 'services/parseDataFromLS';

const Movies = () => {
  const [films, setFilms] = useState(() => parseDataFromLS('films'));

  return (
    <Box textAlign="center" p="20px">
      <SearchForm getFilms={setFilms} />
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
