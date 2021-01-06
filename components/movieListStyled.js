import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
  font-size: 20px;
  color: #696969;
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  border-bottom: 1px solid #696969;
`;

export const MovieList = styled.ul`
  margin: 20px 0 20px 0;
  list-style-type: none;
`;

export const MovieListItem = styled.li`
  margin-bottom: 5px;
`;
