import { BrowserRouter } from "react-router-dom";
import Routers from "~Routers/index";
import { ConfigProvider } from "antd";

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
				<Routers />
			</BrowserRouter>
		</ConfigProvider>
	);
}

export default App;
