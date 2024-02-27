import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "~components/layout";
import RouterLayout from "~Routers/RouterLayouts";
import ScrollToTop from "~components/common/ScrollToTop";

const index = () => {
	const routers = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: RouterLayout,
		},
	]);
	return (
		<>
			<ScrollToTop /> {routers}
		</>
	);
};

export default index;
