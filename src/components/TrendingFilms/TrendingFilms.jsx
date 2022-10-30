import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrendingData, IMG_URL } from 'services/axios';
import { List, ListItem } from './TrendingFilms.styled';

const TrendingFilms = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const getTrendingFilms = async () => {
      try {
        const data = await fetchTrendingData();
        setTrendFilms(data.data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    getTrendingFilms();
  }, []);

  return (
    <List>
      {trendFilms.map(({ id, original_title, poster_path }) => (
        <ListItem key={id}>
          <NavLink to={`movies/${id}`}>
            <img
              src={`${IMG_URL}${poster_path}`}
              alt={original_title}
              width="300"
            />
            <p>{original_title}</p>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default TrendingFilms;
