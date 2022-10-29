import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById, IMG_URL } from 'services/axios';

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getFilm = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data.data);
    };
    getFilm();
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average, release_date } =
    movie;

  return (
    <div>
      {poster_path && <img src={`${IMG_URL}${poster_path}`} alt={title} />}
      <h2>
        {release_date && (
          <p>
            Title: {title}({release_date.substring(0, 4)})
          </p>
        )}
        <p>User score: {vote_average}</p>
        <p>Overview: {overview}</p>
        <p>Genres: {genres && genres.map(genre => genre.name + ' ')}</p>
      </h2>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
