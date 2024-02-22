import React from "react";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
	const navigate = useNavigate();
	return (
		<section className="pricing section has-bg-color">
			<div className="container">
				<div className="pricing-inner section-inner">
					<div className="section-header center-content invert-color">
						<div className="container-xs">
							<h2 className="mt-0 mb-16">Services</h2>
							<p className="m-0">
								Discover the difference our exceptional services can make to
								your project. With{" "}
								<span className={style.nameCompanyBold}>
									Alpha's Flooring LLC
								</span>
								, you not only get quality products, but also a service
								experience that will leave you completely satisfied and ready to
								face new challenges with confidence.
							</p>
						</div>
					</div>
					<div className="tiles-wrap">
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner has-shadow">
								<div className="pricing-item-content">
									<div className="pricing-item-header pb-24 mb-24">
										<div className="text-xs text-color-low">Basic</div>
									</div>
									<div className="pricing-item-features mb-40">
										<div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
											What’s included
										</div>
										<ul className="pricing-item-features-list list-reset text-xs mb-32">
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li>Excepteur sint occaecat velit</li>
											<li>Excepteur sint occaecat velit</li>
										</ul>
									</div>
								</div>
								<div className="pricing-item-cta mb-8">
									<a
										className="button button-primary button-block"
										onClick={() => navigate("/services")}
									>
										Quote now
									</a>
								</div>
							</div>
						</div>
						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner has-shadow">
								<div className="pricing-item-content">
									<div className="pricing-item-header pb-24 mb-24">
										<div className="text-xs text-color-low">Standar</div>
									</div>
									<div className="pricing-item-features mb-40">
										<div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
											What’s included
										</div>
										<ul className="pricing-item-features-list list-reset text-xs mb-32">
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li>Excepteur sint occaecat velit</li>
										</ul>
									</div>
								</div>
								<div className="pricing-item-cta mb-8">
									<a
										className="button button-primary button-block"
										onClick={() => navigate("/services")}
									>
										Quote now
									</a>
								</div>
							</div>
						</div>
						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner has-shadow">
								<div className="pricing-item-content">
									<div className="pricing-item-header pb-24 mb-24">
										<div className="text-xs text-color-low">Premium</div>
									</div>
									<div className="pricing-item-features mb-40">
										<div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
											What’s included
										</div>
										<ul className="pricing-item-features-list list-reset text-xs mb-32">
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
											<li className="is-checked">
												Excepteur sint occaecat velit
											</li>
										</ul>
									</div>
								</div>
								<div className="pricing-item-cta mb-8">
									<a
										className="button button-primary button-block"
										onClick={() => navigate("/services")}
									>
										Quote now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
