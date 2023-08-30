import React, { useState } from 'react';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary/MealsSummary';
import Meals from './components/Meals/Meals';
import DUMMY_MEALS from './components/Meals/dummy-meals';
import Cart from './components/Carts/Cart';
import { CartProvider } from './store/CartProvider';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const openModalHandler = () => {
		setIsOpen(true);
	};
	const closeModalHandler = () => {
		setIsOpen(false);
	};

	return (
		<CartProvider>
			<div>
				<Header onShowModal={openModalHandler} />
				<main>
					<MealsSummary />
					<Meals meals={DUMMY_MEALS} />
				</main>
				{isOpen && <Cart onHideModal={closeModalHandler} />}
			</div>
		</CartProvider>
	);
}

export default App;
