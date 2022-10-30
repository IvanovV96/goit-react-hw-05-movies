import Box from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      const data = await fetchReviewsById(movieId);
      setReviews(data.data.results);
    };
    getReview();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Box textAlign="center" mt="30px">
          <p>There is no reviews for this film...</p>
        </Box>
      )}
    </>
  );
};

export default Reviews;
