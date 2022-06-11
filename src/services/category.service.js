import axios from "axios";
axios.defaults.withCredentials = true;
import authHeader from "./auth-header";
const API_URL = "http://127.0.0.1:8000/api/";
class CategoryService {
    getAll() {
        return axios.get(API_URL + "category", { headers: authHeader() });
    }
}
export default new CategoryService();
