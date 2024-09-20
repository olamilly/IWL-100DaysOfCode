import logo from "../logo.svg";
import { useState } from "react";
import useData from "../hooks/useData";
import { useSelector } from "react-redux";

function Home() {
	const name = useSelector((state) => state.name);
	//Get and Set User name
	const [userName, setUserName] = useState(name);
	const { handleNameChange } = useData();
	return (
		<div className="home">
			<div className="logo">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Quiz App</h1>
			</div>
			<form
				className="homeForm"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<label>Enter your name</label>
				<input
					id="name"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</form>
			<div className="buttonContainer" to="/categories">
				<button
					onClick={() => {
						handleNameChange(userName);
					}}
					id="nextButton"
					disabled={userName === null || userName.length === 0}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Home;
