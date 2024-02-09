import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../app/Routes";
import useAuth from "../auth/useAuth";

const LogoutRoute = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	useEffect(() => {
		const signOutUser = async () => {
			try {
				logout();
				await new Promise((resolve) => setTimeout(resolve, 2000));
				navigate(LOGIN_ROUTE);
			} catch (err) {
				console.error(err);
			}
		};
		signOutUser();
	}, [logout, navigate]);

	return (
		<Typography variant="h3" textAlign="center">
			Signing out..
		</Typography>
	);
};

export default LogoutRoute;
