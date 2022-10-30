import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  :visited {
    text-decoration: none;
  }
  :active {
    text-decoration: none;
  }
  :link {
    text-decoration: none;
  }
  &.active {
    background-color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: teal;
  }
`;

export const Header = styled.header`
  padding: 20px;
  background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
`;
