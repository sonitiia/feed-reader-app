import axiosInstance from "../api/axiosInstance";

class UserService {
	async getUser(userId) {
		return (await axiosInstance.get(`users/${userId}`)).data;
	}
}

const userService = new UserService();
export default userService;
