import PropTypes from 'prop-types';
import { List, ListItem } from 'components/TrendingFilms/TrendingFilms.styled';
import { NavLink } from 'react-router-dom';
import { IMG_URL } from 'services/axios';
import img from 'placeholder-img.png';

const MoviesList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title, poster_path = img }) => (
        <ListItem key={id}>
          <NavLink to={`${id}`}>
            <img
              src={`${IMG_URL}${poster_path}`}
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
  films: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};
