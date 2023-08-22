import React from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import Meals from "./components/Meals/Meals";
import DUMMY_MEALS from "./components/Meals/dummy-meals";
import Cart from "./components/Carts/Cart";

function App() {
  return (
    <div>
      <Header />
      <main>
        <MealsSummary />
        <Meals meals={DUMMY_MEALS} />
      </main>
      <Cart meals={DUMMY_MEALS} />
    </div>
  );
}

export default App;
