import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ authRoute }) => {
	const { isAuthorized } = useAuth();
	const location = useLocation();

	return isAuthorized ? (
		<Outlet />
	) : (
		<Navigate to={authRoute} state={{ from: location }} replace />
	);
};

export default RequireAuth;
