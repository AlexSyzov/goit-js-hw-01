import React from "react";
import { NavList, NavListItem } from "./styled";
import "./navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = ({ activeColor }) => (
  <NavList>
    <NavListItem>
      <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">
        Home
      </NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink
        exact
        to="/movies"
        style={activeColor && { color: activeColor.color }}
        className="navLink"
        activeClassName="activeNavLink"
      >
        Movies
      </NavLink>
    </NavListItem>
  </NavList>
);

export default Navigation;
