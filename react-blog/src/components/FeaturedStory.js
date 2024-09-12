import { Link } from "react-router-dom";
function FeaturedStory({ story }) {
	return (
		<div className="col-md-6">
			<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative featured featured-box">
				<img className="demo-bg" src={story.img} alt={story.imgAlt}></img>

				<div className="col p-4 d-flex flex-column position-static featured-content">
					<strong className="d-inline-block mb-2 text-success-emphasis">
						{story.tag}
					</strong>
					<h3 className="mb-0">{story.title}</h3>
					<div className="mb-1 text-body-secondary">{story.time}</div>
					<p className="fw-bold m-0">{story.author}</p>
					<p className="mb-auto">{story.description}</p>
					<Link
						className="icon-link"
						// state={story}
						to={`/story?id=${story.id}`}
					>
						<p className="m-0">Continue reading</p>
						<i className="bx bx-right-arrow-alt"></i>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FeaturedStory;
