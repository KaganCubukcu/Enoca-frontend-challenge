import React from "react";
import "./filter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setSelectedCountry,
} from "../../redux/filterSlice";

const Filter = () => {
  const selectedCountry = useSelector(
    (state) => state.filterSlice.selectedCountry
  );
  const selectedCategory = useSelector(
    (state) => state.filterSlice.selectedCategory
  );
  const dispatch = useDispatch();

  const handleCountryChange = (event) => {
    dispatch(setSelectedCountry(event.target.value));
  };
  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };
  return (
    <div className="filter-container">
      <p>Search by country name:</p>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="tr">Turkish</option>
        <option value="jp">Japanese</option>
        <option value="kr">Korean</option>
        <option value="us">English</option>
        <option value="ru">Russian</option>
      </select>
      <p>Selected country: {selectedCountry}</p>

      <p>Search by category:</p>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
};

export default Filter;
