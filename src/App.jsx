import { BrowserRouter } from "react-router-dom";
import Routers from "~Routers/index";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./context/AuthProvider";

function App() {
	return (
		<ConfigProvider
			theme={{
				hashed: false,
				token: {
					fontFamily: "Fira Sans",
				},
			}}
		>
			<BrowserRouter>
				<AuthProvider>
					<Routers />
				</AuthProvider>
			</BrowserRouter>
		</ConfigProvider>
	);
}

export default App;
