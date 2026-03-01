import Grill from "../assets/header/Grilled.png";
import Avocado from "../assets/header/Avocado.png";
import Baked from "../assets/header/Baked.png";
import Shrimp from "../assets/header/Shrimp.png";

const menuData = {
  featured: {
    title: "Grilled Turkey Breast with Steamed Asparagus and Brown Rice",
    image: Grill,
    category: "Lunch",
    rating: 4.8,
    reviews: 125,
    difficulty: "Medium",
    healthScore: 85,
    cookDuration: "10 minutes",
    totalSteps: 4,
    nutrition: {
      calories: 450,
      carbs: 40,
      proteins: 35,
      fats: 12,
    },
  },
  allMenu: [
    {
      id: 1,
      title: "Avocado Toast with Poached Egg",
      image: Avocado,
      category: "Breakfast",
      difficulty: "Easy",
      healthScore: 9,
      calories: 320,
      carbs: 30,
      protein: 14,
      fats: 18,
    },
    {
      id: 2,
      title: "Grilled Shrimp Tacos with Mango Salsa",
      image: Shrimp,
      category: "Lunch",
      difficulty: "Medium",
      healthScore: 8,
      calories: 400,
      carbs: 45,
      protein: 28,
      fats: 12,
    },
    {
      id: 3,
      title: "Baked Chicken Breast with Quinoa and Kale",
      image: Baked,
      category: "Dinner",
      difficulty: "Medium",
      healthScore: 9,
      calories: 480,
      carbs: 50,
      protein: 40,
      fats: 15,
    },
  ],
};

export default menuData;
