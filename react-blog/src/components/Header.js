import BrandLogo from "../logo.svg";
import { Link } from "react-router-dom";
const topics = [
	"JavaScript",
	"Python",
	"PHP",
	"Hardware",
	"Design",
	"Opinion",
	"Developers",
	"Jobs",
];
// const topicElements = document.querySelectorAll("a.nav-item.nav-link.link-body-emphasis");
function changeNavTopic(e) {
	var topicElements = [...e.target.parentElement.children];
	topicElements.forEach((i) => {
		i.classList.remove("active");
	});
	e.target.classList.add("active");
}
function Header() {
	return (
		<div className="my_container">
			<header className="d-flex px-2 py-1 mb-4 ">
				<div className="d-flex flex-wrap inner-header px-2 py-3 mb-4 border-bottom w-100">
					<a
						href="/"
						className="d-flex align-items-center mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
					>
						<img src={BrandLogo} alt="Logo" />
						{/* <span className="fs-4">Olamilly Blog</span> */}
					</a>

					<ul className="nav nav-pills">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-center">
					<h1 className="name">Angle Brackets</h1>
					<p>Number 1 Tech Blog in the world</p>
				</div>
			</header>
			<div className="nav-scroller py-0 px-2 mb-3 border-bottom">
				<nav className="nav nav-underline justify-content-between">
					<a
						className="nav-item nav-link link-body-emphasis active"
						onClick={changeNavTopic}
					>
						Latest
					</a>
					{Array.from({ length: topics.length }, (_, i) => (
						<a
							className="nav-item nav-link link-body-emphasis"
							key={i}
							onClick={changeNavTopic}
						>
							{topics[i]}
						</a>
					))}
				</nav>
			</div>
		</div>
	);
}

export default Header;
