import React from "react";
import logo from "~assets/images/logo.png";
import style from "./styles.module.css";

const index = () => {
	return (
		<header className="site-header invert-color mt-10">
			<div className="container">
				<div className="site-header-inner">
					<div className="brand">
						<h1 className="m-0">
							<a href="index.html">
								<img src={logo} alt="Tidy" className={style.logo_img} />
							</a>
						</h1>
					</div>
					<button
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
					<nav id="header-nav" className="header-nav">
						<div className="header-nav-inner">
							<ul className={`list-reset text-xs header-nav-right`}>
								<li>
									<a href="additional.html">About Us</a>
								</li>
								{/* <li>
									<a href="additional.html">Special features</a>
								</li> */}
								<li>
									<a href="additional.html">Testimonials</a>
								</li>
								<li>
									<a href="additional.html">Services</a>
								</li>
								<li>
									<a href="additional.html">Contact Us</a>
								</li>
							</ul>
							{/* <ul className="list-reset header-nav-right">
								<li>
									<a
										className="button button-primary button-wide-mobile button-wide-mobile button-sm"
										href="signup.html"
									>
										Sign up
									</a>
								</li>
							</ul> */}
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default index;
