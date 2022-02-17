import data from "../data/oldtownstudio.json";
const OldTownStudio = () => {
	return (
		<div className="oldtownstudio">
			<p>{data[0].description}</p>
			<div className="maps">
				<iframe src={data[0].img} title="Old Town Studio"></iframe>
			</div>
		</div>
	);
};

export default OldTownStudio;
