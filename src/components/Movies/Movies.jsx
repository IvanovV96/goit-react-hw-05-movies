import { useState } from 'react';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Box from 'components/Box/Box';

const Movies = () => {
  const [films, setFilms] = useState([]);

  const getFilms = films => {
    setFilms(films);
  };
  return (
    <Box textAlign="center" p="20px">
      <SearchForm getFilms={getFilms} />
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
