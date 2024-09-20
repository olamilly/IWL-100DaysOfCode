import { createStore } from "redux";
const initialState = {
	name: "",
	category: { id: 0, name: "" },
	difficulty: "",
	viewState: 0,
	score: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_NAME":
			return { ...state, name: action.payload };
		case "SET_CATEGORY":
			return { ...state, category: action.payload };
		case "SET_DIFFICULTY":
			return { ...state, difficulty: action.payload };
		case "SET_VIEWSTATE":
			return { ...state, viewState: action.payload };
		case "SET_SCORE":
			return { ...state, score: action.payload };
		default:
			return state;
	}
};

const store = createStore(reducer);
export default store;
