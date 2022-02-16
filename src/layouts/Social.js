import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
	return (
		<div className="social">
			<a
				href="https://www.facebook.com/ryspodkarpacki"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faFacebookSquare} />
			</a>

			<a
				href="https://www.instagram.com/ryspodkarpacki/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faInstagram} />
			</a>

			<a href="mailto:kontakt@ryspodkarpacki.pl">
				<FontAwesomeIcon icon={faEnvelope} />
			</a>

			<a href="tel:602 585 939">
				{" "}
				<FontAwesomeIcon icon={faPhone} />
			</a>
		</div>
	);
};

export default Social;
