import styled from "styled-components";

const FontFamily = `
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const ReviewsList = styled.ul`
  ${FontFamily}
  list-style-type: none;
`;

export const ReviewsListItem = styled.li`
  margin-bottom: 30px;

  & > h4 {
    margin-bottom: 12px;
  }
`;
