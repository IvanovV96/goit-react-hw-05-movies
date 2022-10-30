import { List, ListItem } from 'components/TrendingFilms/TrendingFilms.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById, IMG_URL } from 'services/axios';
import img from 'placeholder-img.png';
import Box from 'components/Box/Box';

const Cast = () => {
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
    <>
      {cast.length > 0 ? (
        <List>
          {cast.map(({ profile_path, character, id, name }) => (
            <ListItem key={id}>
              <img
                src={`${IMG_URL}${profile_path}`}
                alt=""
                width="200"
                onError={e => (e.target.src = img)}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </ListItem>
          ))}
        </List>
      ) : (
        <Box textAlign="center" mt="30px">
          <p>There is no cast information for this film...</p>
        </Box>
      )}
    </>
  );
};

export default Cast;
