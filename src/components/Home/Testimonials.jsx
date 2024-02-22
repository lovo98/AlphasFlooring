import { Rate } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
	const navigate = useNavigate();
	return (
		<section className="roadmap section has-top-divider">
			<div className="container">
				<div className="roadmap-inner section-inner">
					<div className="section-header center-content">
						<div className="container-xs">
							<h2 className="mt-0 mb-16">Testimonials</h2>
						</div>
					</div>
					<div className="timeline">
						<div className="timeline-wrap">
							<div className="timeline-item">
								<div className="timeline-item-inner">
									<div className="timeline-item-header text-color-low tt-u mb-4 reveal-fade">
										Calos peréz <br />
										November 2019 <br />
										<Rate allowHalf defaultValue={5} disabled />
									</div>
									<div className="timeline-item-content fw-700 h4 m-0 reveal-from-side">
										Incredible experience! The Alpha's Flooring team was very
										professional and attentive to my needs.
									</div>
								</div>
							</div>
							<div className="timeline-item">
								<div className="timeline-item-inner">
									<div className="timeline-item-header text-color-low tt-u mb-4 reveal-fade">
										April Vega <br />
										December 2019 <br />
										<Rate allowHalf defaultValue={4.5} disabled />
									</div>
									<div className="timeline-item-content fw-700 h4 m-0 reveal-from-side">
										I can't say enough good things about Alphas Flooring From
										first contact to project completion.
									</div>
								</div>
							</div>
							<div className="timeline-item">
								<div className="timeline-item-inner">
									<div className="timeline-item-header text-color-low tt-u mb-4 reveal-fade">
										Chris <br />
										January 2020 <br />
										<Rate allowHalf defaultValue={4.5} disabled />
									</div>
									<div className="timeline-item-content fw-700 h4 m-0 reveal-from-side">
										Awesome customer service! The team really took the time to
										understand my needs and provide customized solutions.
									</div>
								</div>
							</div>
							<div className="timeline-item">
								<div className="timeline-item-inner">
									<div className="timeline-item-header text-color-low tt-u mb-4 reveal-fade">
										Amy Santiago <br />
										February 2019 <br />
										<Rate allowHalf defaultValue={4} disabled />
									</div>
									<div className="timeline-item-content fw-700 h4 m-0 reveal-from-side">
										I have been lucky enough to find us for the installation of
										hardwood floors in my home.
									</div>
								</div>
							</div>
							<div className="timeline-item">
								<div className="timeline-item-inner">
									<div className="timeline-item-header text-color-low tt-u mb-4 reveal-fade">
										Rosa Díaz <br />
										March 2020 <br />
										<Rate allowHalf defaultValue={5} disabled />
									</div>
									<div className="timeline-item-content fw-700 h4 m-0 reveal-from-side">
										Excellent experience from start to finish not only offers
										high quality products but also exceptional customer service.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="center-content mt-50">
						<a
							className="button button-primary button-wide-mobile"
							onClick={() => navigate("/testimonials")}
						>
							See more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
