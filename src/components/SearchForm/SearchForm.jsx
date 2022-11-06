import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/axios';
import { Input, SearchButton } from './SearchForm.styled';

const SearchForm = ({ getFilms }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const onChange = e => {
    setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});
  };
  const onSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.search.value;
    if (!inputValue.trim()) {
      alert('try again');
      localStorage.setItem('films', []);
      return;
    }
    const data = await fetchMoviesByName(query);
    setSearchParams({ query });
    localStorage.setItem('films', JSON.stringify(data.data.results));
    getFilms(data.data.results);
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
  getFilms: PropTypes.func.isRequired,
};
