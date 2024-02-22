import React from "react";
import { useNavigate } from "react-router-dom";
import img404 from "~assets/images/404.svg";

const index = () => {
	const navigate = useNavigate();
	return (
		<section className="features-tabs section center-content has-bottom-divider mt-50">
			<div className="container">
				<div className="features-tabs-inner section-inner">
					<div className="section-header center-content">
						<div className="">
							<img src={img404} alt="not_found" />
							<p className="mt-10">
								Sorry, the page you visited does not exist.
							</p>
							<a
								className="button button-primary button-wide-mobile"
								onClick={() => navigate("/")}
							>
								Home
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
