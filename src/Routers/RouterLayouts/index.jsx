import AboutUs from "~components/AboutUs";
import ContactUs from "~components/ContactUS";
import Home from "~components/Home";
import NotFoundPage from "~components/common/404";
import Services from "~components/ServicesPage";
import Login from "~components/Login";

const index = [
	{ index: true, element: <Home /> },
	{ path: "about-us", element: <AboutUs /> },
	{ path: "contact-us", element: <ContactUs /> },
	{ path: "testimonials", element: <Services /> },
	{ path: "login", element: <Login /> },
	{ path: "*", element: <NotFoundPage /> },
];

export default index;
