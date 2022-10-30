import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ListItem = styled.li`
  text-align: center;
  font-size: 20px;

  a {
    color: black;
    text-decoration: none;
    :visited {
      color: inherit;
    }
    :hover {
      color: teal;
    }
  }
`;
