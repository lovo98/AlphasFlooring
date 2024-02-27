import React, { useEffect } from "react";
import styleCss from "../AboutUs/styles.module.css";
import contact_us_img from "~assets/images/contact_us.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router-dom";

const index = () => {
	const position = [29.7422301, -95.4729384];
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to top when component mounts
	}, [pathname]);
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
										<span className={styleCss.font_bold}>Telephone:</span>{" "}
										713-270-7800 <br />
										<span className={styleCss.font_bold}>Email:</span>{" "}
										prueba@gmail.com <br />
										<span className={styleCss.font_bold}>
											Office Hours:
										</span>{" "}
										Monday to Friday: 9:00 am - 5:00 pm <br />
										<span className={styleCss.font_bold}>
											Saturdays and Sundays:
										</span>{" "}
										Closed
									</div>
								</div>
							</div>
						</div>
					</div>
					<MapContainer
						center={position}
						zoom={13}
						style={{ height: "400px", width: "100%" }}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={position}>
							<Popup>
								Alpha's Flooring LLC <br />
								2632 Yorktown st #549 <br />
								Houston Texas 77056
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</section>
	);
};

export default index;
