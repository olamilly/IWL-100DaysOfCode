import { useSelector, useDispatch } from "react-redux";

const useData = () => {
	const dispatch = useDispatch();
	const categories = [
		{ id: 9, name: "General Knowledge" },
		{ id: 11, name: "Entertainment: Film" },
		{ id: 12, name: "Entertainment: Music" },
		{ id: 14, name: "Entertainment: Television" },
		{ id: 18, name: "Science: Computers" },
		{ id: 20, name: "Mythology" },
		{ id: 21, name: "Sports" },
		{ id: 22, name: "Geography" },
		{ id: 23, name: "History" },
		{ id: 25, name: "Art" },
		{ id: 26, name: "Celebrities" },
		{ id: 27, name: "Animals" },
		{ id: 31, name: "Entertainment: Japanese Anime & Manga" },
		{ id: 32, name: "Entertainment: Cartoon & Animations" },
	];
	const viewState = useSelector((state) => state.viewState);
	function homeView() {
		dispatch({ type: "SET_VIEWSTATE", payload: 0 });
		dispatch({ type: "SET_SCORE", payload: 0 });
	}
	function nextView() {
		dispatch({ type: "SET_VIEWSTATE", payload: viewState + 1 });
	}
	function previousView() {
		dispatch({ type: "SET_VIEWSTATE", payload: viewState - 1 });
	}
	const handleNameChange = (userName) => {
		dispatch({ type: "SET_NAME", payload: userName });
		nextView();
	};
	// save the selected category in the redux store
	function handleCategoryChange(category) {
		dispatch({ type: "SET_CATEGORY", payload: category });
		nextView();
	}
	// save the selected difficulty in the redux store
	function handleDifficultyChange(difficulty) {
		dispatch({ type: "SET_DIFFICULTY", payload: difficulty });
		nextView();
	}
	return {
		categories,
		homeView,
		previousView,
		nextView,
		handleNameChange,
		handleDifficultyChange,
		handleCategoryChange,
	};
};

export default useData;
