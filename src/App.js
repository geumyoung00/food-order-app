import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import Meals from "./components/Meals/Meals";
import DUMMY_MEALS from "./components/Meals/dummy-meals";
import Cart from "./components/Carts/Cart";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(true);
  };
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Header onShowModal={openModalHandler} />
      <main>
        <MealsSummary />
        <Meals meals={DUMMY_MEALS} />
      </main>
      {isOpen && <Cart meals={DUMMY_MEALS} onHideModal={closeModalHandler} />}
    </div>
  );
}

export default App;
