import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useData from "../hooks/useData";
import { useSelector } from "react-redux";

function Categories() {
	const { categories, handleCategoryChange } = useData();
	const stored_category = useSelector((state) => state.category);
	const [selectedCategory, setSelectedCategory] = useState(stored_category);

	useEffect(() => {
		if (stored_category.name) {
			document
				.getElementById(stored_category.name)
				.classList.toggle("selected");
		}
	}, [stored_category]);

	function pickCategory(e, category) {
		var categoryElements = [...e.target.parentElement.children];
		//remove selected class from previously selected category
		categoryElements.forEach((i) => {
			i.classList.remove("selected");
		});
		//add selected class to chosen category
		e.target.classList.toggle("selected");
		//store the chosen category
		setSelectedCategory(category);
	}

	return (
		<div className="container">
			<Navbar location="previous" />
			<div className="header">
				<h1>Choose your favorite topic</h1>
				<h3>Select a topic to get started</h3>
			</div>
			<div className="body">
				<div className="categories">
					{
						//Display the categories/topics dynamically from the categories array
						Array.from({ length: categories.length }, (_, index) => (
							<p
								className="category"
								key={index}
								id={categories[index].name}
								onClick={(e) => {
									pickCategory(e, categories[index]);
								}}
							>
								{categories[index].name}
							</p>
						))
					}
				</div>
			</div>

			<div className="buttonContainer" to="/difficulty">
				<button
					onClick={() => {
						// save the selected category in the redux store
						handleCategoryChange(selectedCategory);
					}}
					disabled={selectedCategory.id == 0}
					id="nextButton"
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Categories;
