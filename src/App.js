import React from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import Meals from "./components/Meals/Meals";
import DUMMY_MEALS from "./components/Meals/dummy-meals";

function App() {
  return (
    <div>
      <Header />
      <main>
        <MealsSummary />
        <Meals meals={DUMMY_MEALS} />
      </main>
    </div>
  );
}

export default App;
