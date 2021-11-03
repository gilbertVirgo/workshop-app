import "./App.css";

import logo from "./logo.svg";

function App() {
	return (
		<form action="http://localhost:8000/pdf" method="GET">
			<input type="text" name="name" placeholder="Your name" />
			<input type="submit" value="Create PDF" />
		</form>
	);
}

export default App;
