import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "../components/StartPage";
import App from "./App";

const Index = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/rys_podkarpacki/*" element={<App />} />
			</Routes>
		</Router>
	);
};

export default Index;
