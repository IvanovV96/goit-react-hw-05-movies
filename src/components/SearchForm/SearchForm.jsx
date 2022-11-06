import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, SearchButton } from './SearchForm.styled';

const SearchForm = ({ getQuery }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setQuery(searchParams.get('query') ?? '');
  }, [searchParams]);

  const onChange = e => {
    setQuery(e.target.value);
  };
  const onSubmit = async e => {
    e.preventDefault();
    if (!query.trim()) {
      alert('try again');
      return;
    }
    getQuery(query);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <Input type="text" value={query} name="search" onChange={onChange} />
      </label>
      <SearchButton type="submit">Search</SearchButton>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
