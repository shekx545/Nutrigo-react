import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Menu from "./pages/menu/Menu";
import FoodDiary from "./pages/foodDiar/FoodDiary";
import Progress from "./pages/progress/Progress";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/menu" />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/food-diary" element={<FoodDiary />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
