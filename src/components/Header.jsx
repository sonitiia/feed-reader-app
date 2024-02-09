import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../app/Routes";
import useAuth from "../auth/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link, Stack } from "@mui/material";

const Header = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const handleLogout = () => {
		logout();
		navigate(LOGIN_ROUTE);
	};

	return (
		<AppBar position="static" sx={{ alignItems: "center" }}>
			<Stack maxWidth="md" width={1}>
				<Toolbar>
					<Link
						component={RouterLink}
						to={MAIN_ROUTE}
						color="secondary"
						sx={{
							display: "flex",
							flexGrow: 1,
							alignItems: "center",
							textDecoration: "none",
						}}
						gap={2}
					>
						<AutoStoriesIcon />
						<Typography variant="h6">Feed Reader</Typography>
					</Link>
					<Button
						color="secondary"
						variant="outlined"
						onClick={handleLogout}
						endIcon={<LogoutIcon fontSize="small" />}
					>
						Logout
					</Button>
				</Toolbar>
			</Stack>
		</AppBar>
	);
};

export default Header;
