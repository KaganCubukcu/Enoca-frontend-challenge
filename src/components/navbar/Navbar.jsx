import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/filterSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.dataset.value));
  };

  return (
    <nav className="navbar-container">
      <ul className="categories-ul">
        <NavLink
          to="/"
          data-value=""
          onClick={handleCategoryChange}
          style={{ textDecoration: "none", color: "black" }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/categories"
          data-value=""
          onClick={handleCategoryChange}
          style={{ textDecoration: "none", color: "black" }}
        >
          CATEGORIES
        </NavLink>
        <NavLink
          to="/business"
          style={{ textDecoration: "none", color: "black" }}
          data-value="business"
          onClick={handleCategoryChange}
        >
          BUSINESS
        </NavLink>
        <NavLink
          to="/general"
          style={{ textDecoration: "none", color: "black" }}
          data-value="general"
          onClick={handleCategoryChange}
        >
          GENERAL
        </NavLink>
        <NavLink
          to="/health"
          style={{ textDecoration: "none", color: "black" }}
          data-value="health"
          onClick={handleCategoryChange}
        >
          HEALTH
        </NavLink>
        <NavLink
          to="/entertainment"
          style={{ textDecoration: "none", color: "black" }}
          data-value="entertainment"
          onClick={handleCategoryChange}
        >
          ENTERTAINMENT
        </NavLink>
        <NavLink
          to="/science"
          style={{ textDecoration: "none", color: "black" }}
          data-value="science"
          onClick={handleCategoryChange}
        >
          SCIENCE
        </NavLink>
        <NavLink
          to="/sports"
          style={{ textDecoration: "none", color: "black" }}
          data-value="sports"
          onClick={handleCategoryChange}
        >
          SPORTS
        </NavLink>
        <NavLink
          to="/technology"
          style={{ textDecoration: "none", color: "black" }}
          data-value="technology"
          onClick={handleCategoryChange}
        >
          TECHNOLOGY
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
