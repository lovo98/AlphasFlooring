import React from "react";
import style from "./styles.module.css";
import about_us_img from "~assets/images/about-us.svg";

const index = () => {
	return (
		<section className="features-tabs section center-content has-bottom-divider mt-50">
			<div className="container">
				<div className="features-tabs-inner section-inner">
					<div className="section-header center-content">
						<div className="">
							<h2 className="mt-0 mb-16">About us</h2>
							<div className={style.container_about}>
								<img
									src={about_us_img}
									alt="about_us"
									className={style.img_about}
								/>
								<p className={`m-0 ${style.p_about}`}>
									Welcome to{" "}
									<span className={style.nameCompany}>
										Alpha's Flooring LLC
									</span>
									, your destination for elegance natural and exceptional
									craftsmanship in wood flooring and carving.
									<br />
									<br />
									At{" "}
									<span className={style.nameCompany}>
										Alpha's Flooring LLC
									</span>
									, we are proud to offer an experience unique in the world of
									decoration and interior design. We are dedicated to the
									creation and marketing of apartments wood of the highest
									quality, as well as the production of hand-carved pieces that
									enhance the beauty and charm of any space. Our company is
									founded on passion by wood and the art of carving, fusing
									tradition with innovation to provide aesthetic solutions and
									functional to our clients. Every piece we create reflects our
									commitment to excellence, durability and Respect for the
									enviroment.
									<br />
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
