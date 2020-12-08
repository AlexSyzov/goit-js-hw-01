import React from "react";
import { FeedbackButton } from "../styled";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;

  return (
    <>
      <FeedbackButton onClick={() => onLeaveFeedback(good)}>
        Good
      </FeedbackButton>
      <FeedbackButton onClick={() => onLeaveFeedback(neutral)}>
        Neutral
      </FeedbackButton>
      <FeedbackButton onClick={() => onLeaveFeedback(bad)}>Bad</FeedbackButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

FeedbackOptions.defaultProps = {
  options: ["good", "neutral", "bad"],
};

export default FeedbackOptions;
