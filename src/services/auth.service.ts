import axios from "axios";
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL } from "../settings";
import { LoginFormData, RegistrationFormData } from "../shared/interfaces/auth";

class AuthService {
  static async login(loginData: LoginFormData) {
    return await axios.post(LOGIN_URL, loginData);
  }

  static async logout() {
    return axios.get(LOGOUT_URL);
  }

  static async register(registrationData: RegistrationFormData) {
    return axios.post(REGISTER_URL, registrationData);
  }
}

export default AuthService;
