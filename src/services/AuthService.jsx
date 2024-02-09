import userService from "./UserService";

class AuthService {
	login(userData) {
		const credentials = {
			email: "Sincere@april.biz",
			password: "reeW3knln*",
		};
		try {
			if (
				userData.email === credentials.email &&
				userData.password === credentials.password
			) {
				return userService.getUser(1);
			} else {
				return null;
			}
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	logout() {
		return null;
	}
}

const authService = new AuthService();
export default authService;
