import styled from "styled-components";

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid #c0c0c0;
  padding-left: 5px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 2px solid #c0c0c0;
  transition: all 0.2s linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 26px;
`;
