import BrandLogo from "../logo.svg";
function onSubmit(e) {
	e.preventDefault();
	e.target.style.display = "none";
	document.querySelector("#loader").classList.toggle("d-none");
	setTimeout(() => {
		document.querySelector("#loader").classList.toggle("d-none");
		document.querySelector(".modal-header").classList.toggle("d-none");
		document.querySelector(".message").classList.toggle("d-none");
	}, 1700);
}
function Modal({ text }) {
	return (
		<div className="my_container">
			<div type="button" data-bs-toggle="modal" data-bs-target="#modalSignin">
				{text == "More stories" ? (
					<div className="d-flex mb-4 align-items-center justify-content-center text-center">
						<p className="m-0">{text}</p>
						<i className="bx bx-right-arrow-alt"></i>
					</div>
				) : (
					<div>
						<span style={{ textDecoration: "underline" }}>{text}</span> to Angle
						Brackets.
					</div>
				)}
			</div>
			<div className="modal " tabIndex="-1" role="dialog" id="modalSignin">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content rounded-4 shadow">
						<div className="modal-header mb-4 modal-header p-5 pt-2 pb-1 d-flex flex-column jusutify-content-center align-items-center">
							<img src={BrandLogo} alt="Logo" height="70px" />
							<div className="w-100 text-center pb-1 border-bottom-0">
								<h1 className="fw-bold mb-0 ">Sign up for free</h1>
							</div>
							<p className="text-center mb-1">
								Enjoy unlimited access and get stories sent directly to your
								mail.
							</p>
						</div>

						<div className="modal-body p-5 pt-0">
							<form onSubmit={onSubmit}>
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control rounded-3"
										id="floatingInput"
										placeholder="name@example.com"
										required
									/>
									<label htmlFor="floatingInput">Email address</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control rounded-3"
										id="floatingPassword"
										placeholder="Password"
										required
									/>
									<label htmlFor="floatingPassword">Password</label>
								</div>
								<button
									className="w-100 mb-2 btn btn-lg rounded-3 "
									type="submit"
								>
									Sign up
								</button>
								<div className="w-100 text-center">
									<small className="text-body-secondary ">
										By clicking Sign up, you agree to the terms of use.
									</small>
								</div>
							</form>
							<div
								id="loader"
								className="d-none w-100 d-flex justify-content-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="80"
									height="80"
									viewBox="0 0 50 50"
									stroke="#000000"
								>
									<g fill="none" fillRule="evenodd">
										<g transform="translate(1 1)" strokeWidth="2">
											<circle strokeOpacity=".5" cx="18" cy="18" r="18" />
											<path d="M36 18c0-9.94-8.06-18-18-18">
												<animateTransform
													attributeName="transform"
													type="rotate"
													from="0 18 18"
													to="360 18 18"
													dur="1s"
													repeatCount="indefinite"
												/>
											</path>
										</g>
									</g>
								</svg>
							</div>
							<h1 className="text-center message mt-4 d-none">
								Lmao there are no more stories
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
