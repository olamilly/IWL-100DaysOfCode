import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const useFetch = () => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	const category = useSelector((state) => state.category);
	const difficulty = useSelector((state) => state.difficulty);

	useEffect(() => {
		fetch(
			`https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=${difficulty}&type=multiple`
		)
			.then((res) => {
				if (!res.ok) {
					// error coming back from server
					throw Error(
						"Error getting questions. Check your Internet and try again."
					);
				}
				return res.json();
			})
			.then((data) => {
				setIsPending(false);
				var q = [];
				data.results.forEach((i) => {
					var question = new Object();
					question.text = i.question;
					question.options = i.incorrect_answers;
					question.options.push(i.correct_answer);
					question.options = question.options
						.map((a) => ({ sort: Math.random(), value: a }))
						.sort((a, b) => a.sort - b.sort)
						.map((a) => a.value);
					question.answer = i.correct_answer;
					q.push(question);
				});
				setData(q);
				setError(null);
			})
			.catch((err) => {
				// auto catches network / connection error
				setIsPending(false);
				setError(err.message);
			});
	}, []);

	return { data, isPending, error };
};

export default useFetch;
