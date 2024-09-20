import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useData from "../hooks/useData";
function QuestionCard(props) {
	const { nextView, homeView } = useData();
	const dispatch = useDispatch();
	const [index, setIndex] = useState(0);
	const category = useSelector((state) => state.category);
	const score = useSelector((state) => state.score);

	function chooseAnswer(e) {
		e.target.classList.add("userSelected");
		document.querySelectorAll(".option").forEach((i) => {
			if (i.id == props.questions[index].answer) {
				i.classList.add("right");
			} else {
				i.classList.add("wrong");
			}
		});
		document.querySelector("#nextButton").classList.remove("d-none");
		if (index == 9) {
			document.querySelector("#nextButton").innerText = "View Result";
			document
				.querySelector("#nextButton")
				.removeEventListener("click", nextQuestion);
			document.querySelector("#nextButton").addEventListener("click", nextView);
		}
		if (e.target.id == props.questions[index].answer) {
			document.querySelector(".answerState").innerText = "Correct";
			document.querySelector(".answerState").style.color = "Green";
			dispatch({ type: "SET_SCORE", payload: score + 10 });
		} else {
			document.querySelector(".answerState").innerText = "Wrong Answer";
			document.querySelector(".answerState").style.color = "Red";
		}
		document
			.querySelector(".gameCardContainer")
			.scrollIntoView({ behavior: "smooth", block: "end" });
	}
	function nextQuestion() {
		setIndex(index + 1);
		document.querySelectorAll(".option").forEach((i) => {
			i.classList.remove("userSelected");
			i.classList.remove("right");
			i.classList.remove("wrong");
		});
		document.querySelector("#nextButton").classList.add("d-none");
		document.querySelector(".answerState").innerText = "";
	}
	return (
		<div className="gameCardContainer">
			<div className="gameCard">
				<h1>{category.name}</h1>
				<div className="cardHeader">
					<p>Question {index + 1}/10</p>
					<p id="quit" onClick={homeView}>
						Quit
					</p>
				</div>
				<div className="body">
					<h3
						id="question"
						dangerouslySetInnerHTML={{
							__html: props.questions[index].text,
						}}
					></h3>
					<div className="options">
						{
							//Display the categories/topics dynamically from the categories array
							Array.from(
								{ length: props.questions[index].options.length },
								(_, i) => (
									<p
										className="option"
										key={i}
										id={props.questions[index].options[i]}
										onClick={(e) => {
											chooseAnswer(e);
										}}
										dangerouslySetInnerHTML={{
											__html: props.questions[index].options[i],
										}}
									></p>
								)
							)
						}
					</div>
				</div>
				<p className="answerState"></p>
				<div className="gameControl" to="/result">
					<button className="d-none" id="nextButton" onClick={nextQuestion}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default QuestionCard;
