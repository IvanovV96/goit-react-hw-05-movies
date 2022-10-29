import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/axios';

export const SearchForm = ({ getFilms }) => {
  const onChange = e => {
    setSearchParams({ query: e.target.value });
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const onSubmit = async e => {
    e.preventDefault();
    const data = await fetchMoviesByName(query);

    getFilms(data.data.results);
    setSearchParams('');
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" value={query ?? ''} onChange={onChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
