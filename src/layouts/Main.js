import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Home from "../pages/Home";
import AboutDeren from "../pages/AboutDeren";
import OldTownStudio from "../pages/OldTownStudio";
import InMedia from "../pages/InMedia";
const Main = () => {
	return (
		<div className="main">
			<Routes>
				<Route path="/rys_podkarpacki" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/aboutderen" element={<AboutDeren />} />
				<Route path="/oldtownstudio" element={<OldTownStudio />} />
				<Route path="/inmedia" element={<InMedia />} />
			</Routes>
		</div>
	);
};

export default Main;
