import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";

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
								At{" "}
								<span className={style.nameCompany}>Alpha's Flooring LLC</span>,
								we are proud to offer exceptional solutions in installation,
								restoration and maintenance of wooden floors of the highest
								quality. With a passionate dedication to craftsmanship and
								excellence, we have established a solid reputation as leaders in
								the industry From the wood.
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
