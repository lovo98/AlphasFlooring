import React, { useState, useEffect, createContext } from "react";
import axiosConfig from "~/config/axiosConfig";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	useEffect(() => {
		const autenticarUSuario = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				return;
			}

			try {
				const { data } = await axiosConfig.get("/usuarios/perfil");
				setAuth(data);
			} catch (error) {}
		};

		autenticarUSuario();
	}, []);

	const cerrarSesion = () => {
		setAuth({});
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider
			value={{
				setAuth,
				auth,
				cerrarSesion,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };

export default AuthContext;
