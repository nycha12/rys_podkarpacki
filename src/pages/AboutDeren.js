import deren from "../img/deren_misa.jpg";
import deren2 from "../img/deren_sad.png";
const AboutDeren = () => {
	return (
		<div className="aboutderen">
			<img src={deren} alt="Dereń" className="deren" />
			<img src={deren2} alt="Kwitnący dereń" className="deren2" />
			<p>
				Dereń jadalny, dereń właściwy (łać. Cornus mas) - gatunek rośliny z
				rodziny dereniowatych, zaliczany do roślin długowiecznych. Czasy jego
				największej popularności w Polsce przypadają na pierwszą połowę XIX
				wieku, kiedy to był krzewem rosnącym niemal przy każdym dworze
				ziemiańskim oraz parku. W naturalnych warunkach występował w Małopolsce
				Wschodniej. Już wówczas znane były jego smakowe, jak i zdrowotne walory.
				Te soczyste, kwaskowate owoce są bowiem bogate w witaminy, polifenole,
				kwasy organiczne i antocyjany. Obecnie są w nim również związki
				mineralne, takie jak: potas, wapń, fosfor, sód, magnez, a także żelazo,
				cynk, miedź i mangan.
			</p>
			<p>
				Pierwsze nasze nasadzenia derenia (1997 rok) pochodzą z Karpat (głównie
				Małopolski Wschodniej), ze zbioru prof. Jerzego Pióreckiego -
				założyciela Arboretum w Bolestraszycach. Od samego początku dokładamy
				wszelkich starań, aby nasze rośliny otoczone były naturalną pielęgnacją,
				której potwierdzeniem jest certyfikat ekologiczny BioCert.
			</p>
		</div>
	);
};

export default AboutDeren;
