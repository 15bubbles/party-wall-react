import { LOGIN_URL, LOGOUT_URL, REGISTER_URL } from "../settings";
import { LoginFormData, RegistrationFormData } from "../shared/interfaces/auth";

class AuthService {
  static async login(loginData: LoginFormData) {
    return fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    });
  }

  static async logout() {
    return fetch(LOGOUT_URL, {
      method: "GET",
    });
  }

  static async register(registrationData: RegistrationFormData) {
    return fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(registrationData),
    });
  }
}

export default AuthService;
