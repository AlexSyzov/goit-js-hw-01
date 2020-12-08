import React from "react";
import { NotificationContainer } from "../styled";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <NotificationContainer>{message}</NotificationContainer>;
};

Notification.defaultProps = {
  message: "No data",
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
