import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title } from './styles';
import List from './List';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List stats={stats} />
    </Section>
  );
};

List.defaultProps = {
  title: '',
};

List.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
