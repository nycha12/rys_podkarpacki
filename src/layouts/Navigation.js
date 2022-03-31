import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navigation = () => {
	const [showMenu, setShowMenu] = useState("");
	const handleShowMenu = () => {
		if (showMenu === "active") {
			setShowMenu("");
		} else {
			setShowMenu("active");
		}
	};
	const handleHideMenu = () => {
		setShowMenu("");
	};
	return (
		<div className="navigation">
			<FontAwesomeIcon
				onClick={handleShowMenu}
				icon={faBars}
				className="bars"
			/>
			<div className={showMenu}>
				<NavLink onClick={handleHideMenu} to="home">
					Home
				</NavLink>
				<NavLink onClick={handleHideMenu} to="products">
					Produkty
				</NavLink>
				<NavLink onClick={handleHideMenu} to="aboutDeren">
					O dereniu
				</NavLink>
				<NavLink onClick={handleHideMenu} to="oldtownstudio">
					Old Town Studio
				</NavLink>
				<NavLink onClick={handleHideMenu} to="inmedia">
					W mediach
				</NavLink>
				<a
					onClick={handleHideMenu}
					target="_blank"
					href="https://sklep.ryspodkarpacki.pl/"
					rel="noreferrer"
				>
					Sklep
				</a>
			</div>
		</div>
	);
};

export default Navigation;
