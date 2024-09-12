import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Modal from "../components/Modal.js";
// import "./App.css";
export default function About() {
	return (
		<div className="my_container">
			<Header />
			<div className="mx-2 text-center">
				<h1 style={{ fontSize: "3rem" }}>About</h1>
				<p>
					Angle Brackets is a tech blog dedicated to providing insightful
					articles, tutorials, and news for developers and tech enthusiasts. Our
					goal is to empower you with the knowledge and tools you need to stay
					ahead of the curve in the fast-paced world of technology.
				</p>
				<h3 className="text-center">What We Cover</h3>
				<p>At Angle Brackets, we cover a wide range of topics, including:</p>

				<ul className="d-flex flex-wrap justify-content-around cover">
					<li>
						<h4>Programming languages </h4>From JavaScript and Python to
						emerging languages like Rust and Go.
					</li>
					<li>
						<h4>Frameworks and libraries </h4>React, Vue, Angular, Node.js, and
						more.
					</li>
					<li>
						<h4>Databases </h4> SQL, NoSQL, and database design.
					</li>
					<li>
						<h4>Cloud computing </h4>AWS, Azure, GCP, and serverless
						technologies.
					</li>
					<li>
						<h4>Web development</h4>HTML, CSS, and web design best practices.
					</li>
					<li>
						<h4>Mobile development </h4>iOS, Android, and cross-platform
						development.
					</li>
					<li>
						<h4>DevOps </h4>Automation, CI/CD, and cloud infrastructure.
					</li>
					<li>
						<h4>Emerging technologies</h4>AI, machine learning, blockchain, and
						the Internet of Things.
					</li>
				</ul>

				<h3 className="text-center">Our Mission</h3>

				<p>
					Our mission is to create a community where developers and tech
					enthusiasts can learn, share knowledge, and inspire each other. We
					strive to provide high-quality content that is informative, engaging,
					and accessible to readers of all levels.
				</p>
				<h3 className="text-center">Join the Community</h3>
				<p>
					We invite you to become a regular reader of Angle Brackets and join
					our growing community. <Modal text="Subscribe" /> Follow us on social
					media and contribute to our discussions.
				</p>

				<strong>
					This blog is part of The 100 Days of Code Challenge at{" "}
					<a
						href="https://www.linkedin.com/company/innovate-web-labs/"
						target="_blank"
					>
						Innovate Web Labs
					</a>{" "}
					internship. This is a brilliant innovation by{" "}
					<a
						href="https://www.linkedin.com/in/hamzajavedreactdev/"
						target="_blank"
					>
						Hamza Javed
					</a>
					. <br />
					The 100 Days of Code challenge is a global movement where developers
					commit to coding every day for 100 days.
				</strong>
			</div>

			<Footer />
		</div>
	);
}
