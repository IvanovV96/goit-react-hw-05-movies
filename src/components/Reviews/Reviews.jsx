import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/axios';

export const Reviews = () => {
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
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
