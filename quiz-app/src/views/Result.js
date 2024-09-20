import useData from "../hooks/useData";
import { useSelector } from "react-redux";

function Result() {
	const score = useSelector((state) => state.score);
	const name = useSelector((state) => state.name);
	const { homeView } = useData();
	return (
		<div className="container">
			<div className="resultPadding"></div>
			<div className="resultCard">
				<div className="scoreCard">
					<p>Your Score</p>
					<p className="score">{score}%</p>
				</div>
				{score < 50 && (
					<div className="scoreMessage">
						<h4>Not so great :{`(`}</h4>
						<p>Better luck nextime {name}.</p>
					</div>
				)}
				{score >= 50 && (
					<div className="scoreMessage">
						<h4>Congratulations!</h4>
						<p>Great Job {name}.</p>
					</div>
				)}
			</div>
			<div></div>
			<div className="buttonContainer resultbuttonContainer">
				{/* <button>Share</button> */}
				<div className="buttonContainer">
					<button onClick={homeView}>Back to Home</button>
				</div>
			</div>
		</div>
	);
}

export default Result;
