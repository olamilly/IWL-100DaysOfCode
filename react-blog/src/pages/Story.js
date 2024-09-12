import { useEffect, useMemo } from "react";
import Footer from "../components/Footer.js";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AllStories from "../AllStories.js";
function useQuery() {
	const { search } = useLocation();
	return useMemo(() => new URLSearchParams(search), [search]);
}
export default function Story() {
	let query = useQuery();

	const location = useLocation();

	const navigate = useNavigate();
	var storyId = query.get("id");
	// return (
	// 	<div>
	// 		<p>{query.get("title")}</p>
	// 		<p>{location.state.id}</p>
	// 	</div>
	// );
	// useEffect(() => {
	// 	if (!location.state) {
	// 		navigate("/");
	// 	}
	// }, [location.state, navigate]);
	useEffect(() => {
		if (!storyId) {
			navigate("/");
		}
	}, [storyId, navigate]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="my_container">
			<div class="header d-flex justify-content-start p-2">
				<Link to="/">
					<span class="header__logo-sub">
						<i
							class="bx bx-left-arrow-alt"
							style={{ color: "black", fontSize: "2rem" }}
						></i>
					</span>
				</Link>
			</div>
			<article class="blog-post mt-3 mx-5">
				<div className="w-100 d-flex justify-content-center">
					<div className="row g-0 border rounded  flex-md-row mb-2  position-relative main-featured ">
						<img
							className="demo-bg-main"
							src={AllStories[storyId].img}
							alt={AllStories[storyId].imgAlt}
						></img>
					</div>
				</div>
				<h2 class="display-5 link-body-emphasis mb-1">
					{/* {location.state.title} */}
					{AllStories[storyId].title}
				</h2>
				<p class="blog-post-meta text-center">
					{AllStories[storyId].time} by
					<span> </span>
					<a className="text-primary" style={{ cursor: "pointer" }}>
						{AllStories[storyId].author}
					</a>
				</p>

				<p className="text-center">{AllStories[storyId].intro}</p>
				<hr />
				<div
					dangerouslySetInnerHTML={{ __html: AllStories[storyId].main }}
				></div>
			</article>
			<nav
				class="blog-pagination d-flex justify-content-center mb-2"
				aria-label="Pagination"
			>
				<Link
					className={
						" mx-2 " +
						(Number(storyId) == 0 ? "pagination-disabled" : "pagination")
					}
					to={`/story?id=${Number(storyId) - 1}`}
					onClick={window.scrollTo(0, 0)}
				>
					Previous
				</Link>
				<Link
					className={
						"mx-2 " +
						(Number(storyId) == AllStories.length - 1
							? "pagination-disabled"
							: "pagination")
					}
					to={`/story?id=${Number(storyId) + 1}`}
					onClick={window.scrollTo(0, 0)}
				>
					Next
				</Link>
			</nav>
			<Footer />
		</div>
	);
}
