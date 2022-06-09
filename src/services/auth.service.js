import axios from "axios";
axios.defaults.withCredentials = true;
const API_URL = "http://127.0.0.1:8000/api/";
class AuthService {
    login(user) {
        return axios
            .post(API_URL + "login", {
                email: user.email,
                password: user.password,
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                }
                return response.data;
            });
    }
    logout() {
        return axios
            .get(API_URL + "logout", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                if (response.data.success) {
                    localStorage.removeItem("token");
                }
                return response.data;
            });
    }
    getUser() {
        return axios
            .get(API_URL + "userAuth", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                return response.data;
            });
    }
}
export default new AuthService();
