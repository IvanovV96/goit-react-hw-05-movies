import PropTypes from 'prop-types';
import { List, ListItem } from 'components/TrendingFilms/TrendingFilms.styled';
import { NavLink, useLocation } from 'react-router-dom';
import { IMG_URL } from 'services/axios';
import img from 'placeholder-img.png';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <List>
      {films.map(({ id, title, poster_path }) => (
        <ListItem key={id}>
          <NavLink to={`${id}`} state={{ from: location }}>
            <img
              src={poster_path ? `${IMG_URL}${poster_path}` : img}
              alt={title}
              width="300"
              onError={e => (e.target.src = img)}
            />
            <p>{title}</p>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.array,
};
