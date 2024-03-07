import axios from "axios";
import { getAuthToken } from "~helpers/token";

const axiosConfig = axios.create({
	baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosConfig.interceptors.request.use((config) => {
	const token = getAuthToken() || null;
	config.headers["Authorization"] = `Bearer ${token}`;
	return config;
});

export default axiosConfig;
