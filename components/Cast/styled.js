import styled from "styled-components";

const FontFamily = `
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Portrait = styled.img`
  height: 340px;
  width: 240px;
  margin-right: 16px;
  border-radius: 5px;
`;

export const CastList = styled.ul`
  list-style-type: none;
`;

export const CastListItem = styled.li`
  display: flex;
  margin-bottom: 12px;
  width: 600px;
`;

export const ActorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    font-weight: 700;
    font-size: 26px;
    ${FontFamily}
  }

  & > div:nth-child(1) {
    margin-bottom: 20px;
  }
`;
