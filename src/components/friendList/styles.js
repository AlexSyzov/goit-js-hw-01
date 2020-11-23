import styled from 'styled-components';

export const Container = styled.ul`
  width: 150px;
  margin: 80px 0 0 20px;
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 10px;
  background-color: #c0c0c0;
  padding: 0 20px 0 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #000;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    opacity: 0.6;
  }

  &:hover > span {
    transform: scale(1.2);
  }
`;

export const Online = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: lime;
`;

export const Offline = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: tomato;
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  display: inline-block;
`;
