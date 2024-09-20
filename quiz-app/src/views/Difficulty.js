import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useData from "../hooks/useData";
import { useSelector } from "react-redux";

function Details() {
	const { handleDifficultyChange } = useData();
	const stored_difficulty = useSelector((state) => state.difficulty);
	useEffect(() => {
		if (stored_difficulty) {
			document.getElementById(stored_difficulty).classList.toggle("selected");
		}
	}, [stored_difficulty]);
	//add selected class to selected difficulty element and store the selected difficulty
	const [difficulty, setDifficulty] = useState(stored_difficulty);
	function selectDifficulty(e, selectDifficulty) {
		//remove selected class from previously selected difficulty
		document.querySelectorAll(".difficulty").forEach((i) => {
			i.classList.remove("selected");
		});
		//add selected class to chosen difficulty
		e.target.classList.toggle("selected");
		setDifficulty(selectDifficulty);
	}

	return (
		<div className="container">
			<Navbar location="previous" />
			<div className="header">
				<h1>Choose your preffered difficulty</h1>
			</div>
			<div className="body">
				<div className="categories">
					<p
						id="easy"
						className="difficulty"
						onClick={(e) => {
							selectDifficulty(e, "easy");
						}}
					>
						Easy
					</p>
					<p
						id="medium"
						className="difficulty"
						onClick={(e) => {
							selectDifficulty(e, "medium");
						}}
					>
						Medium
					</p>
					<p
						id="hard"
						className="difficulty"
						onClick={(e) => {
							selectDifficulty(e, "hard");
						}}
					>
						Hard
					</p>
				</div>
			</div>

			<div className="buttonContainer" to="/game">
				<button
					id="nextButton"
					onClick={() => {
						// save the selected difficulty in the redux store
						handleDifficultyChange(difficulty);
					}}
					disabled={difficulty.length == 0}
				>
					Start
				</button>
			</div>
		</div>
	);
}

export default Details;
