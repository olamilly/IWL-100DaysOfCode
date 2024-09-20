import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import QuestionCard from "../components/QuestionCard";
import useData from "../hooks/useData";

function Game() {
	const { error, isPending, data: questions } = useFetch();
	const { homeView } = useData();
	if (error) {
		return (
			<div className="container">
				<div></div>
				<div className="error">
					Error getting questions. Check your Internet and try again.
				</div>
				<div className="buttonContainer">
					<button onClick={homeView}>Back to Home</button>
				</div>
			</div>
		);
	}
	if (isPending) {
		return (
			<div className="container">
				<div></div>
				<div id="loader">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="80"
						height="80"
						viewBox="0 0 50 50"
						stroke="#000000"
					>
						<g fill="none" fillRule="evenodd">
							<g transform="translate(1 1)" strokeWidth="2">
								<circle strokeOpacity=".5" cx="18" cy="18" r="18" />
								<path d="M36 18c0-9.94-8.06-18-18-18">
									<animateTransform
										attributeName="transform"
										type="rotate"
										from="0 18 18"
										to="360 18 18"
										dur="1s"
										repeatCount="indefinite"
									/>
								</path>
							</g>
						</g>
					</svg>
				</div>
				<div></div>
				<div></div>
			</div>
		);
	}
	if (questions) {
		return (
			<div className="container">
				<Navbar location="previous" />
				<QuestionCard questions={questions} />
			</div>
		);
	}
}

export default Game;
