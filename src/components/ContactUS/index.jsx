import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ViewMap from "~components/common/Map";
import contact_us_img from "~assets/images/contact_us.svg";
import styleCss from "../AboutUs/styles.module.css";
import style from "../Home/styles.module.css";

const index = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to top when component mounts
	}, [pathname]);

	const redirectToWhatsApp = () => {
		const url = `https://wa.me/+18329981983`;
		window.open(url, "_blank");
	};

	return (
		<section className="features-tabs section center-content has-bottom-divider mt-50">
			<div className="container">
				<div className="features-tabs-inner section-inner">
					<div className="section-header center-content">
						<div className="">
							<h2 className="mt-0 mb-16">Contact us</h2>
							<div className={styleCss.container_about}>
								<img
									src={contact_us_img}
									alt="about_us"
									className={styleCss.img_about}
								/>
								<div className={`m-0 ${styleCss.p_about}`}>
									We're here to help you every step of the way! At{" "}
									<span className={styleCss.nameCompany}>
										Alpha's Flooring LLC
									</span>{" "}
									value open communication and are committed to providing you
									with the best experience possible. Do not hesitate to contact
									us for any questions, quote requests or technical assistance.
									<br /> <br />
									<span className={styleCss.nameCompany}>
										We are happy to help you.
									</span>
									<br />
									<div className={styleCss.justifyText}>
										<span className={styleCss.font_bold}>Address:</span> 2632
										Yorktown st #549 Houston Texas 77056 <br />
										<span className={styleCss.font_bold}>Telephone:</span> +1
										832-998-1983 <br />
										<span className={styleCss.font_bold}>Email:</span>{" "}
										alphasflooring7@gmail.com <br />
										<span className={styleCss.font_bold}>
											Office Hours:
										</span>{" "}
										Monday to Friday: 9:00 am - 5:00 pm <br />
										<span className={styleCss.font_bold}>
											Saturdays and Sundays:
										</span>{" "}
										Closed
									</div>{" "}
									<br />
									<div className={`button-group`}>
										<a
											className={`button button-primary ${style.separate}`}
											onClick={() => redirectToWhatsApp()}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 448 512"
											>
												<path
													fill="#ffffff"
													d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
												/>
											</svg>
											Send message
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ViewMap />
				</div>
			</div>
		</section>
	);
};

export default index;
