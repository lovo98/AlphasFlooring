import React from "react";
import Img_portada from "~assets/images/portada2.jpg";
import AboutUs from "./AboutUs";
import SpecialFeatures from "./SpecialFeatures";
import Testimonials from "./Testimonials";
import Services from "./Services";

const index = () => {
	return (
		<main className="site-content">
			<section className="hero section has-bg-color invert-color">
				<div className="container">
					<div className="hero-inner section-inner">
						<div className="split-wrap">
							<div className="split-item">
								<div className="hero-content split-item-content center-content-mobile reveal-from-top">
									<h1 className="mt-0 mb-16">Alpha's Flooring LLC </h1>
									<p className="mt-0 mb-32">
										Floors that elevate your home to new levels!.
									</p>
									<div className="button-group">
										<a
											className="button button-primary button-wide-mobile"
											href="/"
										>
											Quote now
										</a>
										{/* <a className="button button-dark button-wide-mobile" href="#">
											Learn more
										</a> */}
									</div>
								</div>
								<div className="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom">
									<img
										src={Img_portada}
										alt="portada"
										width="528"
										height="396"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<AboutUs />
			<SpecialFeatures />
			<Testimonials />
			<Services />
		</main>
	);
};

export default index;
