import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  margin: 80px auto 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 26px;
  font-family: 'Arial';
  margin-bottom: 40px;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.li`
  height: 80px;
  text-align: center;
  background-color: #bc8f8f;
  padding-top: 14px;
  box-sizing: border-box;
  color: #f0ffff;
  width: 80px;
  border: 2px dotted #f0ffff;
  box-shadow: 2px 2px 7px #000;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 22px;
  color: #000;
`;
