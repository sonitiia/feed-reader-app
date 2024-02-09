import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import MuiTheme from "./MuiTheme";
import { AuthProvider } from "../auth/useAuth";

const App = () => {
	return (
		<MuiTheme>
			<AuthProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</AuthProvider>
		</MuiTheme>
	);
};

export default App;
