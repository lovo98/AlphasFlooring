import React from "react";
import style from "./styles.module.css";

const SpecialFeatures = () => {
	const features = [
		{
			id: 1,
			title: "Best Quality",
			description:
				"Quality is not just a promise; It is the core of our philosophy. At Alpha's Flooring LLC  , we believe that every customer deserves the best, and that is precisely what we offer: the highest quality hardwood floors that endure in their splendor, creating a legacy of beauty and durability.",
		},
		{
			id: 2,
			title: "Continuous Innovation",
			description:
				"At Alpha's Flooring LLC, we strive to stay at the forefront of the industry through continuous innovation. Our team of research and development experts work tirelessly to improve our products, providing our customers with design, technology and functionality, we are committed to offering flooring solutions that exceed your expectations and define standards of excellence in the industry.",
		},
		{
			id: 3,
			title: "Competitive price",
			description:
				"We strive to keep our prices competitive by optimizing our processes, efficiencies in resource management, and negotiating advantageous agreements with suppliers. This allows us to offer you top-notch products and services at prices that fit your budget, without compromising quality or service.",
		},
	];
	return (
		<section className="news section illustration-section-01">
			<div className="container">
				<div className="news-inner section-inner">
					<div className="section-header center-content">
						<div className="container-xs">
							<h2 className="mt-0 mb-16">Special features</h2>
						</div>
					</div>
					<div className="tiles-wrap">
						{features.map((element, index) => {
							return (
								<article className="tiles-item reveal-from-bottom" key={index}>
									<div className="tiles-item-inner has-shadow">
										<div className="news-item-content">
											<div className="news-item-body">
												<h3 className="news-item-title h4 mt-0 mb-8">
													{element.title}
												</h3>
												<p className="mb-16 text-sm">{element.description}</p>
											</div>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecialFeatures;
