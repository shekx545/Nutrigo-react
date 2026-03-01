import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

import logo from "../../assets/sidebar/Nutrigo.png";
import dashboardIcon from "../../assets/sidebar/Dashboard.png";
import calendarIcon from "../../assets/sidebar/Calendar.png";
import messageIcon from "../../assets/sidebar/Messages.png";
import healthyIcon from "../../assets/sidebar/Menu.png";
import mealPlanIcon from "../../assets/sidebar/Meal.png";
import foodDiaryIcon from "../../assets/sidebar/Diary.png";
import progressIcon from "../../assets/sidebar/Progress.png";
import exercisesIcon from "../../assets/sidebar/Exercises.png";
import healthIcon from "../../assets/sidebar/Health.png";
import promoImage from "../../assets/sidebar/Promo.png";
import logoutIcon from "../../assets/sidebar/Logout.png";

const Sidebar = () => {
  const [closed, setClosed] = useState(false);
  const location = useLocation();

  const links = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: dashboardIcon,
    },
    {
      to: "/calendar",
      label: "Calendar",
      icon: calendarIcon,
    },
    {
      to: "/messages",
      label: "Messages",
      icon: messageIcon,
      badge: 6,
    },
    {
      to: "/menu",
      label: "Healthy Menu",
      icon: healthyIcon,
    },
    {
      to: "/meal-plan",
      label: "Meal Plan",
      icon: mealPlanIcon,
    },
    {
      to: "/food-diary",
      label: "Food Diary",
      icon: foodDiaryIcon,
    },
    {
      to: "/progress",
      label: "Progress",
      icon: progressIcon,
    },
    {
      to: "/exercises",
      label: "Exercises",
      icon: exercisesIcon,
    },
    {
      to: "/health-insights",
      label: "Health Insights",
      icon: healthIcon,
    },
  ];

  return (
    <aside className={`sidebar ${closed ? "closed" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-header" onClick={() => setClosed(!closed)}>
          <img src={logo} alt="Nutrigo" className="logo" />
          {!closed && <span className="title">Nutrigo</span>}
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`sidebar-link ${location.pathname === link.to ? "active" : ""}`}
            >
              <img src={link.icon} alt={link.label} className="icon" />
              {!closed && <span>{link.label}</span>}
              {link.badge && !closed && (
                <div className="badge">{link.badge}</div>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        {!closed && (
          <div className="sidebar-promo">
            <img src={promoImage} alt="Promo" />
          </div>
        )}

        <button className="sidebar-logout">
          <img src={logoutIcon} alt="Logout" />
          {!closed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
