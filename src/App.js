import React from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import Meals from "./components/Meals/Meals";

function App() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <div>
      <Header />
      <MealsSummary />
      <Meals meals={DUMMY_MEALS} />
    </div>
  );
}

export default App;
