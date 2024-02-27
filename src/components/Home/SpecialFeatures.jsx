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
			title: "24/7 Support",
			description:
				"With our 24/7 support, you can have peace of mind knowing that we are there for you anytime, anywhere. Your comfort and satisfaction are our top priority, and we strive to provide you with exceptional service that exceeds your expectations, even in the most unexpected moments.",
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
