import Home from "../views/Home";
import Categories from "../views/Categories";
import Difficulty from "../views/Difficulty";
import Game from "../views/Game";
import Result from "../views/Result";
import { useSelector } from "react-redux";

function Main() {
	const view = useSelector((state) => state.viewState);
	return (
		<div>
			{view === 0 && <Home />}
			{view === 1 && <Categories />}
			{view === 2 && <Difficulty />}
			{view === 3 && <Game />}
			{view === 4 && <Result />}
		</div>
	);
}

export default Main;
