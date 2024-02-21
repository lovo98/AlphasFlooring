import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
	const navigate = useNavigate();
	return (
		<section className="features-tabs section center-content has-bottom-divider">
			<div className="container">
				<div className="features-tabs-inner section-inner has-top-divider">
					<div className="section-header center-content">
						<div className="container-xs">
							<h2 className="mt-0 mb-16">About us</h2>
							<p className="m-0">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
								sint, eos facere reiciendis laboriosam, architecto officiis quis
								voluptates doloribus temporibus dolore accusamus eligendi enim
								ullam debitis aperiam distinctio dicta expedita.
							</p>
						</div>
					</div>
					<a
						className="button button-primary button-wide-mobile"
						onClick={() => navigate("/about-us")}
					>
						See more
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
