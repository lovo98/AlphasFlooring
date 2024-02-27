import React from "react";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
	const navigate = useNavigate();
	const servicesA = [
		{
			id: 1,
			plan: "Basic",
			include: [
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: false },
				{ id: 1, status: false },
			],
		},
		{
			id: 1,
			plan: "Standar",
			include: [
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: false },
			],
		},
		{
			id: 1,
			plan: "Premium",
			include: [
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: true },
				{ id: 1, status: true },
			],
		},
	];

	const listInclude = [
		{
			id: 1,
			item: "Excepteur sint occaecat velit",
		},
		{
			id: 2,
			item: "Excepteur sint occaecat velit",
		},
		{
			id: 3,
			item: "Excepteur sint occaecat velit",
		},
		{
			id: 4,
			item: "Excepteur sint occaecat velit",
		},
		{
			id: 5,
			item: "Excepteur sint occaecat velit",
		},
	];
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
						{servicesA.map((service, index) => (
							<div className="tiles-item reveal-from-bottom" key={index}>
								<div className="tiles-item-inner has-shadow">
									<div className="pricing-item-content">
										<div className="pricing-item-header pb-24 mb-24">
											<div className="text-xs text-color-low">
												{service.plan}
											</div>
										</div>
										<div className="pricing-item-features mb-40">
											<div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
												What’s included
											</div>
											<ul className="pricing-item-features-list list-reset text-xs mb-32">
												{service.include.map((item, index) => {
													return (
														<li
															className={item.status ? "is-checked" : ""}
															key={index}
														>
															{listInclude.find((i) => i.id === item.id).item}
														</li>
													);
												})}
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
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
