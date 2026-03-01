import React, { useState } from "react";
import menuData from "../../data/menuData";
import Header from "../../components/header/Header";
import "./Menu.css";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Snack", "Dinner"];

  const filteredMenu = menuData.allMenu.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="menu-page">
      <Header onSearch={setSearchTerm} />

      <section className="featured-menu">
        <img
          src={menuData.featured.image}
          alt={menuData.featured.title}
          className="featured-image"
        />
        <div className="featured-details">
          <span className="category">{menuData.featured.category}</span>
          <h2>{menuData.featured.title}</h2>
          <div className="rating">⭐ {menuData.featured.rating}/5</div>
          <div className="info-row">
            <span>Diff: {menuData.featured.difficulty}</span>
            <span>Score: {menuData.featured.healthScore}</span>
          </div>
          <button className="add-meal-btn">Add to Meal Plan</button>
        </div>
        <div className="nutrition-info">
          {Object.entries(menuData.featured.nutrition).map(([key, value]) => (
            <div key={key} className="nutrient">
              <span>{key}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="all-menu">
        <div className="menu-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="menu-list">
          {filteredMenu.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-header">
                <span className="category-label">{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="nutrition-summary">
                <span>🔥 {item.calories}kcal</span>
                <span>🥩 {item.protein}g</span>
              </div>
              <button className="add-meal-btn-sm">Add to Plan</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
