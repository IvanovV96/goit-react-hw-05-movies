import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [films, setFilms] = useState([]);

  const getFilms = films => {
    setFilms(films);
  };
  return (
    <>
      <SearchForm getFilms={getFilms} />
      <MoviesList films={films} />
    </>
  );
};
