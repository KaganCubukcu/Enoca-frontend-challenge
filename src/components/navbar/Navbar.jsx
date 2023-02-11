import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="categories-ul">
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          HOME
        </NavLink>
        <NavLink
          to="/categories"
          style={{ textDecoration: "none", color: "black" }}
        >
          CATEGORIES
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: "none", color: "black" }}>
          ABOUT
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
