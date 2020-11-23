import React from 'react';
import { Item, Label, Percentage, StatList } from './styles';

const List = ({ stats }) => {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => {
        return (
          <Item
            key={id}
            /*style={{
              backgroundColor: `rgb(${randomColorSetter()}, ${randomColorSetter()}, ${randomColorSetter()})`,
            }}*/
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        );
      })}
    </StatList>
  );
};

// If random colors are needed
/*const randomColorSetter = () => {
  return Math.random() * 255;
};*/

export default List;
