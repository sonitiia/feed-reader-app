import { Navigate, Route, Routes } from "react-router-dom";
import {
	FEEDS_ROUTE,
	LOGIN_ROUTE,
	LOGOUT_ROUTE,
	MAIN_ROUTE,
	NOT_FOUND_ROUTE,
} from "./Routes";
import AuthLayout from "../layouts/AuthLayout";
import LoginRoute from "../routes/LoginRoute";
import FeedsRoute from "../routes/FeedsRoute";
import FullWidthLayout from "../layouts/FullWidthLayout";
import useAuth from "../auth/useAuth";
import RequireAuth from "../auth/RequireAuth";
import PageNotFoundRoute from "../routes/PageNotFoundRoute";
import LogoutRoute from "../routes/LogoutRoute";

const Router = () => {
	const { isAuthorized } = useAuth();

	return (
		<Routes>
			{!isAuthorized ? (
				<Route path={MAIN_ROUTE} element={<AuthLayout />}>
					<Route element={<Navigate to={LOGIN_ROUTE} replace />} />
					<Route path={LOGIN_ROUTE} element={<LoginRoute />} />
				</Route>
			) : (
				<Route element={<RequireAuth authRoute={LOGIN_ROUTE} />}>
					<Route path={MAIN_ROUTE} element={<FullWidthLayout />}>
						<Route
							index
							element={<Navigate to={FEEDS_ROUTE} replace />}
						/>

						<Route path={FEEDS_ROUTE} element={<FeedsRoute />} />

						<Route path={LOGOUT_ROUTE} element={<LogoutRoute />} />

						<Route
							path={NOT_FOUND_ROUTE}
							element={<PageNotFoundRoute />}
						/>
						<Route
							path="*"
							element={<Navigate to={NOT_FOUND_ROUTE} replace />}
						/>

						<Route path="*" element={<PageNotFoundRoute />} />
					</Route>
				</Route>
			)}
		</Routes>
	);
};

export default Router;
