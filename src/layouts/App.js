import { BrowserRouter as Router } from "react-router-dom";

import { useState } from "react";

import Navigation from "./Navigation";
import Social from "./Social";
import Main from "./Main";
import StartPage from "../components/StartPage";
import Header from "./Header";
import Footer from "./Footer";
function App() {
	const [enter, setEnter] = useState(true);
	const handleEnter = () => {
		setEnter((prevState) => !prevState);
	};
	return (
		<div>
			{enter && <StartPage enter={enter} handleEnter={handleEnter} />}
			{!enter && (
				<div>
					<Router>
						<Header />
						<Navigation />
						<Main />
						<Social />
						<Footer />
					</Router>
				</div>
			)}
		</div>
	);
}

export default App;
