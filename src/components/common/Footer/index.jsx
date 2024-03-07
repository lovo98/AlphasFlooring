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
					<div className="footer-bottom space-between text-xxs invert-order-desktop">
						<nav className={`footer-nav ${style.text_position}`}>
							<ul className="list-reset">
								<li>
									<FontAwesomeIcon icon={faPhone} /> 832-998-1983
								</li>
								<li>
									<FontAwesomeIcon icon={faEnvelope} />{" "}
									alphasflooring7@gmail.com
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
