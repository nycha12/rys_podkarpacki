import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Home from "../pages/Home";
import AboutDeren from "../pages/AboutDeren";
const Main = () => {
	return (
		<div className="main">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/aboutderen" element={<AboutDeren />} />
			</Routes>
		</div>
	);
};

export default Main;
