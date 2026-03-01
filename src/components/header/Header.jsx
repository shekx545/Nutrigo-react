import React from "react";
import "./Header.css";
import { FiSearch, FiSliders } from "react-icons/fi";

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h2 className="logo">Healthy Menu</h2>
      <div className="right-section">
        <div className="search-box">
          <FiSearch className="icon" />
          <input
            type="text"
            placeholder="Search menu"
            className="search-input"
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
        <button className="filter-btn">
          <FiSliders />
        </button>
        <button className="add-btn">Add Menu</button>
      </div>
    </header>
  );
};

export default Header;
