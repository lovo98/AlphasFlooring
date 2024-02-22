import React from "react";
import { useNavigate } from "react-router-dom";
import imgResult from "~assets/images/mantenimiento.svg";

const index = () => {
	const navigate = useNavigate();
	return (
		<section className="features-tabs section center-content has-bottom-divider mt-50">
			<div className="container">
				<div className="features-tabs-inner section-inner">
					<div className="section-header center-content">
						<div className="">
							<img src={imgResult} alt="not_found" />
							<p className="mt-10">
								We're sorry, the page you visited is under maintenance.
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
