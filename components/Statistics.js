import React from "react";
import { FeedbackContainer } from "../styled";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <FeedbackContainer>Good: {good}</FeedbackContainer>
      <FeedbackContainer>Neutral: {neutral}</FeedbackContainer>
      <FeedbackContainer>Bad: {bad}</FeedbackContainer>
      <FeedbackContainer>Total: {total()}</FeedbackContainer>
      {total() > 0 && (
        <FeedbackContainer>
          Positive feedback: {positivePercentage()} %
        </FeedbackContainer>
      )}
    </>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
