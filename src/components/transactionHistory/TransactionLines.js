import React from 'react';
import { TableData } from './styles';

const TransactionLines = ({ items }) => {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </tr>
    );
  });
};

export default TransactionLines;
