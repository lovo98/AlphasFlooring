import React from "react";
import style from "./styles.module.css";

const SpecialFeatures = () => {
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
						<article className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner has-shadow">
								<div className="news-item-content">
									<div className="news-item-body">
										<h3 className="news-item-title h4 mt-0 mb-8">
											Best Quality
										</h3>
										<p className="mb-16 text-sm">
											Quality is not just a promise; It is the core of our
											philosophy. At{" "}
											<span className={style.nameCompany}>
												Alpha's Flooring LLC
											</span>
											, we believe that every customer deserves the best, and
											that is precisely what we offer: the highest quality
											hardwood floors that endure in their splendor, creating a
											legacy of beauty and durability.
										</p>
									</div>
								</div>
							</div>
						</article>
						<article className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner has-shadow">
								<div className="news-item-content">
									<div className="news-item-body">
										<h3 className="news-item-title h4 mt-0 mb-8">
											24/7 Support
										</h3>
										<p className="mb-16 text-sm">
											With our 24/7 support, you can have peace of mind knowing
											that we are there for you anytime, anywhere. Your comfort
											and satisfaction are our top priority, and we strive to
											provide you with exceptional service that exceeds your
											expectations, even in the most unexpected moments.
										</p>
									</div>
								</div>
							</div>
						</article>
						<article className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner has-shadow">
								<div className="news-item-content">
									<div className="news-item-body">
										<h3 className="news-item-title h4 mt-0 mb-8">
											Competitive price
										</h3>
										<p className="mb-16 text-sm">
											We strive to keep our prices competitive by optimizing our
											processes, efficiencies in resource management, and
											negotiating advantageous agreements with suppliers. This
											allows us to offer you top-notch products and services at
											prices that fit your budget, without compromising quality
											or service.
										</p>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecialFeatures;
