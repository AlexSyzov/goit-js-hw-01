import styled from "styled-components";
import { Link } from "react-router-dom";

const FontFamily = `
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const SecondaryHeader = `
  ${FontFamily}
  margin: 20px 0 20px 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  margin: 20px 0;
  border: 2px solid #c0c0c0;
  transition: all 0.2s linear;
  ${FontFamily}
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ee82ee;
  }
`;

export const Title = styled.h1`
  ${FontFamily}
  margin-bottom: 20px;

  & ~ div {
    ${FontFamily}
  }
`;

export const OverviewHeader = styled.h2`
  ${SecondaryHeader}

  & ~ p {
    ${FontFamily}
  }
`;

export const GenresHeader = styled.h2`
  ${SecondaryHeader}

  & ~ div {
    ${FontFamily}
  }
`;

export const AdditionalHeader = styled.h3`
  ${SecondaryHeader}
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
`;

export const Poster = styled.img`
  height: 400px;
  width: 300px;
  margin-right: 20px;
  border-radius: 5px;
`;

export const AdditionalLink = styled(Link)`
  font-size: 20px;
  color: #696969;
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  border-bottom: 1px solid #696969;
`;

export const AdditionalList = styled.ul`
  margin: 20px 0 20px 0;
  list-style-type: none;
`;

export const AdditionalListItem = styled.li`
  margin-bottom: 5px;
`;
