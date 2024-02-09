import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const FullWidthLayout = () => {
	return (
		<Stack
			alignItems="center"
			justifyContent="flexStart"
			sx={{ width: "100%", minHeight: "100vh" }}
		>
			<Header />
			<Stack maxWidth="xl" width={1}>
				<Outlet />
			</Stack>
		</Stack>
	);
};

export default FullWidthLayout;
