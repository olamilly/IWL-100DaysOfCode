import Modal from "../components/Modal";
import FeaturedStory from "../components/FeaturedStory";
import AllStories from "../AllStories";
import { Link } from "react-router-dom";
function Home() {
	return (
		<div className="my_container">
			<div className="p-4 p-md-5 mb-4 rounded text-body-emphasis featured featured-main ">
				<img
					className="demo-bg"
					src="https://cdn.prod.website-files.com/6097e0eca1e875de53031ff6/65a80e6e68bf74a5a11d653a_vue-vs-react.jpg"
					alt="Headline story: React vs Vue"
				></img>
				<div className="col-lg-6 px-0 featured-content">
					<h1 className="display-4 fst-italic">React vs. Vue</h1>
					<p className="lead my-3 ">
						We're comparing two very popular frontend frameworks
					</p>
					<p className="lead mb-0">
						<Link className="text-body-emphasis fw-bold" to="/headline">
							Continue reading...
						</Link>
					</p>
				</div>
			</div>
			<h2 className="pb-2">Featured Posts</h2>
			<div className="row mb-2">
				<FeaturedStory story={AllStories[0]} />
				<FeaturedStory story={AllStories[1]} />
			</div>
			<div className="row mb-2">
				<FeaturedStory story={AllStories[2]} />
				<FeaturedStory story={AllStories[3]} />
			</div>

			<Modal text="More stories" />
		</div>
	);
}

export default Home;
