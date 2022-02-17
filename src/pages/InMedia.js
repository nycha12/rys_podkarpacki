import video from "../video/pesto.mp4";
import data from "../data/inmedia.json";
const Media = (props) => {
	return (
		<div className="article">
			<p>{props.data.description}</p>
			<iframe
				src={props.data.video}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
};
const InMedia = () => {
	const medias = data.map((media) => <Media key={media.title} data={media} />);
	return (
		<div className="inmedia">
			<video src={video} autoPlay loop></video>
			<div className="wrap">{medias}</div>
		</div>
	);
};

export default InMedia;
