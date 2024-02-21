import AboutUs from "~components/AboutUs";
import ContactUs from "~components/ContactUS";
import Home from "../../components/Home";

const index = [
	{ index: true, element: <Home /> },
	{ path: "about-us", element: <AboutUs /> },
	{ path: "contact-us", element: <ContactUs /> },
];

export default index;
