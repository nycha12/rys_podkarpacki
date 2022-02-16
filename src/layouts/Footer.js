import Logo from "../data/partners.json";
const Partner = (props) => {
	return (
		<div className="partner">
			<a href={props.data.link} rel="noreferrer" target="_blank">
				<img src={props.data.img} alt={props.data.name} />
			</a>
		</div>
	);
};
const Footer = () => {
	const partners = Logo.map((partner) => (
		<Partner key={partner.name} data={partner} />
	));
	return (
		<div className="footer">
			<h2>Partnerzy</h2>
			<div className="partners">{partners}</div>
			<hr />
			<p>copywright</p>
		</div>
	);
};

export default Footer;
