import useData from "../hooks/useData";
import { useSelector } from "react-redux";
function Navbar(props) {
	const name = useSelector((state) => state.name);
	const { previousView } = useData();
	function navigate() {
		if (props.location == "previous") {
			previousView();
		}
	}
	return (
		<div className="navbar">
			<span onClick={navigate}>
				<i className="bx bx-left-arrow-alt"></i>
			</span>
			<p>{name}</p>
		</div>
	);
}

export default Navbar;
