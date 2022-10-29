import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { TrendingFilms } from './TrendingFilms/TrendingFilms';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { Movies } from './Movies/Movies';
import { NotFound } from './NotFound/NotFound';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TrendingFilms />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
