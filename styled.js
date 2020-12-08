import styled from "styled-components";

const FontFamily = `
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const FontSize = `
  font-size: 20px;
`;

const FontSettings = `
  ${FontSize}
  ${FontFamily}
`;

export const Header = styled.h2`
  ${FontFamily}
`;

export const FeedbackButton = styled.button`
  width: 100px;
  background-color: #fff5ee;
  height: 30px;
  margin-right: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  font-weight: 600;
  box-shadow: 1px 1px 2px #c0c0c0;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #da70d6;
  }

  &:focus {
    outline: none;
    border: 1px dotted #bc8f8f;
    background-color: #fff0f5;
    width: 110px;
  }
`;

export const FeedbackContainer = styled.div`
  ${FontSettings}
`;

export const NotificationContainer = styled.div`
  margin-top: 20px;
  ${FontSettings}
`;
