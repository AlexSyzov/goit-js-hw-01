import styled from 'styled-components';

// Main container

export const Container = styled.div`
  margin: 0 auto;
  width: 30%;
  background-color: #fdf5e6;
  padding-top: 30px;
  border: 1px solid #c0c0c0;
  border-bottom: none;
  margin-top: 10px;
  box-shadow: 2px 2px 7px #c0c0c0;
`;

// Description

export const DescrContainer = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 80px;
  height: 80px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  color: #c0c0c0;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Location = styled.p`
  color: #c0c0c0;
  margin-bottom: 20px;
`;

// Stats

export const StatsContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  width: 100%;
  background-color: #f0ffff;

  & > li {
    text-align: center;
    width: 33.33%;
    padding-top: 26px;
    height: 80px;
    border: 1px solid #c0c0c0;
    text-align: center;
    transition: all 0.2s linear;
  }

  & > li:last-child {
    border-left: none;
    border-right: none;
  }

  & > li:first-child {
    border-right: none;
    border-left: none;
  }

  & > li:hover {
    background-color: #7fffd4;
  }
`;

export const Label = styled.span`
  display: block;
  color: #c0c0c0;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
