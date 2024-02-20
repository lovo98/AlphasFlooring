import React from "react";
import style from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
	const year = new Date();
	return (
		<footer className="site-footer center-content-mobile invert-color">
			<div className="container">
				<div className="site-footer-inner">
					<div className="footer-top space-between text-xxs">
						<div className="footer-social">
							<ul className="list-reset">
								<li>
									<a href="#">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Facebook</title>
											<path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
										</svg>
									</a>
								</li>
								<li>
									<a href="#">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Instagram</title>
											<g>
												<circle cx="12.145" cy="3.892" r="1" />
												<path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
												<path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
											</g>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-bottom space-between text-xxs invert-order-desktop">
						<nav className={`footer-nav ${style.text_position}`}>
							<ul className="list-reset">
								<li>
									<FontAwesomeIcon icon={faPhone} /> 713-270-7800
								</li>
								<li>
									<FontAwesomeIcon icon={faEnvelope} /> prueba@gmail.com
								</li>
								<li>
									<FontAwesomeIcon icon={faLocationDot} /> 2632 Yorktown st #549
									Houston Texas 77056
								</li>
							</ul>
						</nav>
						<div className="footer-copyright">
							&copy; {year.getFullYear()} Alpha's Flooring LLC, all rights
							reserved
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default index;
