import { useEffect, useState } from "react";

import logo from "../img/logo.png";

const StartPage = (props) => {
	const [image, setImage] = useState(1);

	function changeImage() {
		setImage(Math.round(Math.random() * 10));
	}

	useEffect(() => {
		const timer = setInterval(changeImage, 6000);
		return () => clearInterval(timer); //wyczyszczenie interwału
	}, []);

	return (
		<div className="startpage">
			<div>
				<img src={logo} alt="Logo" className="logo" />
				<div className="gallery">
					<img src={`/img/gallery/gallery${image}.jpg`} alt="Galeria" />
				</div>
				<h1>Świat Derenia</h1>
				<h2 onClick={props.handleEnter}>Wchodzę !!!</h2>
			</div>
		</div>
	);
};

export default StartPage;
