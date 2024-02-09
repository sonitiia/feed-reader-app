import { createContext, useContext, useState } from "react";
import authService from "../services/AuthService";

const authContext = createContext({
	isAuthorized: false,
	login: () => {},
	logout: () => {},
});

export const AuthProvider = ({ children }) => {
	const [isAuthorized, setIsAuthorized] = useState(() => {
		const storedValue = localStorage.getItem("isAuthorized");
		return storedValue ? JSON.parse(storedValue) : false;
	});

	const auth = {
		login(userData) {
			try {
				const user = authService.login(userData);
				if (user) {
					setIsAuthorized(true);
					localStorage.setItem("isAuthorized", JSON.stringify(true));
				}
				return user;
			} catch (error) {
				console.error("Error login in:", error);
			}
		},

		logout() {
			try {
				authService.logout();
				setIsAuthorized(false);
				localStorage.setItem("isAuthorized", JSON.stringify(false));
			} catch (error) {
				console.error("Error logging out:", error);
			}
		},
	};

	return (
		<authContext.Provider value={{ ...auth, isAuthorized }}>
			{children}
		</authContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default function useAuth() {
	return useContext(authContext);
}
