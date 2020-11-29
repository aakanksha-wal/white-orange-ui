import React from "react";
import Header from "./Header";
import ProductImages from './ProductImages';
import ProductDesc from './ProductDesc';

export const App = () => {
	return (
		<main>
			<Header />
			<div className="product">
				<ProductImages />
				<div className="divider">''</div>
				<ProductDesc />
			</div>
		</main>
	);
};

export default App;
