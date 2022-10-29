import { NavLink } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
