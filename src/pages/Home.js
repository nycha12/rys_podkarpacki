import { useEffect } from "react";
import deren from "../img/deren1.png";
import deren2 from "../img/deren2.png";
const Home = () => {
	useEffect(() => {
		const home = document.querySelector(".home");
		home.classList.add("show");
	}, []);
	return (
		<div className="home">
			<img src={deren} alt="Dereń" className="deren" />
			<img src={deren2} alt="Kwitnący dereń" className="deren2" />
			<p className="history">
				Gospodarstwo rolne Ryś Podkarpacki zostało założone w 1997 roku.
				Położone jest w Polskich Karpatach Wschodnich (Park Krajobrazowy Pogórza
				Przemyskiego i Natura 2000). Od lat naszą domeną są ekologiczne owoce
				derenia.
			</p>

			<article>
				Ponieważ większość naszego życia spędzamy w naszym ogrodzie dereniowym,
				a nie przy komputerze – dlatego aktualności najlepiej szukać na naszych
				portalach społecznościowych:
			</article>

			<p className="booking">
				Nasz ogród dereniowy znajduje się w obszarze Natury 2000, nie mamy
				możliwości wybudować tam żadnych budynków gospodarczych i nie możemy Was
				ugościć w Huwnikach – przygotowaliśmy za to mieszkania do wynajęcia w
				centrum Przemyśla, które stanowić może idealną bazę do poznania
				podkarpackiego derenia:
			</p>
		</div>
	);
};

export default Home;
