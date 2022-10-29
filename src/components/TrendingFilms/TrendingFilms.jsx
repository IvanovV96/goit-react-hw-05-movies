import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrendingData } from 'services/axios';

export const TrendingFilms = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const getTrendingFilms = async () => {
      try {
        const data = await fetchTrendingData();
        setTrendFilms(data.data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrendingFilms();
  }, []);

  return (
    <ul>
      {trendFilms.map(({ id, original_title }) => (
        <li key={id}>
          <NavLink to={`movies/${id}`}>{original_title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
