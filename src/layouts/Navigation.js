import { NavLink } from "react-router-dom";
import logo from "../img/logo2.png";
const Navigation = () => {
	return (
		<div className="navigation">
			{/* <div>
				<img src={logo} alt="" />
				<h1>Ryś podkarpacki</h1>
			</div> */}
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="products">Produkty</NavLink>
				<NavLink to="aboutDeren">O dereniu</NavLink>
			</div>
		</div>
	);
};

export default Navigation;
