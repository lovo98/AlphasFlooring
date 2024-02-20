import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "~components/layout";
import RouterLayout from "~Routers/RouterLayouts";

const index = () => {
	const routers = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: RouterLayout,
		},
	]);
	return <>{routers}</>;
};

export default index;
