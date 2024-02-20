import React from "react";
import { Outlet } from "react-router-dom";
import Header from "~components/common/Header";
import Footer from "~components/common/Footer";

const index = () => {
	return (
		<div className="body-wrap">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default index;
