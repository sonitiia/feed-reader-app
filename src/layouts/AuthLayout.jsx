import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<Stack
			alignItems="center"
			justifyContent="center"
			sx={{ width: "100%", height: "100vh" }}
		>
			<Stack maxWidth="400px" width={1}>
				<Outlet />
			</Stack>
		</Stack>
	);
};

export default AuthLayout;
