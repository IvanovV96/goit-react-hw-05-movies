import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById, IMG_URL } from 'services/axios';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getFilm = async () => {
      const data = await fetchCreditsById(movieId);
      setCast(data.data.cast);
    };
    getFilm();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ profile_path, character, id, name }) => (
        <li key={id}>
          {profile_path && (
            <img src={`${IMG_URL}${profile_path}`} alt="" width="200" />
          )}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
