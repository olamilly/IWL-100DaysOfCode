function Footer() {
	return (
		<div className="my_container footer">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-3 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<span className="mb-3 mb-md-0 text-body-secondary">
						&copy; 2024 Olamilly
					</span>
				</div>

				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3">
						<a
							className="text-body-secondary"
							target="_blank"
							href="https://www.linkedin.com/in/olamide-mustapha/"
						>
							<i className="bx bxl-linkedin"></i>
						</a>
					</li>
					<li className="ms-3">
						<a
							className="text-body-secondary"
							target="_blank"
							href="https://github.com/olamilly"
						>
							<i className="bx bxl-github"></i>
						</a>
					</li>
					<li className="ms-3">
						<a className="text-body-secondary">
							<i className="bx bxl-instagram"></i>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
