import Box from 'components/Box/Box';
import Loader from 'components/Loader';
import { ListItem } from 'components/TrendingFilms/TrendingFilms.styled';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById, IMG_URL } from 'services/axios';
import { IoArrowBackOutline } from 'react-icons/io5';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    const getFilm = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data.data);
    };
    getFilm();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, overview, genres, vote_average, release_date } =
    movie;

  return (
    <Box p="20px">
      <Link to={location.state?.from ?? '/movies'}>
        <Box display="flex" alignItems="center" p="10px">
          <IoArrowBackOutline />
          Go back
        </Box>
      </Link>
      <Box display="flex">
        {poster_path && (
          <img src={`${IMG_URL}${poster_path}`} alt={title} width="300px" />
        )}
        <Box display="flex" flexDirection="column" ml="10px">
          {release_date && (
            <h2 style={{ margin: 0 }}>
              Title: {title}({release_date.substring(0, 4)})
            </h2>
          )}

          <p>
            <b>User score:</b> {vote_average}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            <b>Genres:</b> {genres && genres.map(genre => genre.name + ' ')}
          </p>
        </Box>
      </Box>
      <Box mt="20px" textAlign="center">
        <p>
          <b>Additional information</b>
        </p>
        <ul>
          <ListItem>
            <NavLink to={'cast'} state={{ from: location.state.from }}>
              Cast
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={'reviews'} state={{ from: location.state.from }}>
              Reviews
            </NavLink>
          </ListItem>
        </ul>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieInfo;
