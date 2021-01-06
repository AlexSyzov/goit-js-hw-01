import React from "react";
import { Header } from "./styled.js";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";

const Appbar = ({ activeColor }) => (
  <Header>
    <Navigation activeColor={activeColor} />
  </Header>
);

Appbar.propTypes = {
  activeColor: PropTypes.exact({ color: PropTypes.string.isRequired }),
};

export default Appbar;
