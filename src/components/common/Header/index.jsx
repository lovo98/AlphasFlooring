import React, { useEffect, useState } from "react";
import logo from "~assets/images/logo.png";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const index = () => {
	const [isNavActive, setIsNavActive] = useState(false);
	const navigate = useNavigate();

	const handleNavToggle = () => {
		setIsNavActive(!isNavActive);
	};

	const handleOutsideClick = (e) => {
		const mainNav = document.getElementById("header-nav");
		const navToggle = document.getElementById("header-nav-toggle");

		if (
			!mainNav.contains(e.target) &&
			e.target !== mainNav &&
			e.target !== navToggle
		) {
			setIsNavActive(false);
		}
	};

	// Agrega el event listener al montar el componente
	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);
	return (
		<header className="site-header invert-color">
			<div className="container">
				<div className="site-header-inner">
					<div className="brand">
						<h1 className="m-0">
							<a onClick={() => navigate("/")}>
								<img
									src={logo}
									alt="Tidy"
									className={`${style.logo_img} ${style.cursor_pointer}`}
								/>
							</a>
						</h1>
					</div>
					<button
						onClick={handleNavToggle}
						id="header-nav-toggle"
						className="header-nav-toggle"
						aria-controls="primary-menu"
						aria-expanded="false"
					>
						<span className="screen-reader">Menu</span>
						<span className="hamburger">
							<span className="hamburger-inner"></span>
						</span>
					</button>
					<nav
						style={{ maxHeight: isNavActive ? "240px" : "0" }}
						id="header-nav"
						className={`header-nav ${isNavActive ? "is-active" : ""}`}
					>
						<div className="header-nav-inner">
							<ul className={`list-reset text-xs header-nav-right`}>
								<li>
									<a
										onClick={() => navigate("/about-us")}
										className={style.cursor_pointer}
									>
										About Us
									</a>
								</li>
								<li>
									<a className={style.cursor_pointer}>Testimonials</a>
								</li>
								<li>
									<a className={style.cursor_pointer}>Services</a>
								</li>
								<li>
									<a
										onClick={() => navigate("/contact-us")}
										className={style.cursor_pointer}
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default index;
