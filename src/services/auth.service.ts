import axios, { AxiosResponse } from "axios";
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL } from "../settings";
import { LoginFormData, RegistrationFormData } from "../shared/interfaces/auth";

class AuthService {
  static async login(loginData: LoginFormData): Promise<AxiosResponse> {
    return axios.post(LOGIN_URL, loginData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  static async logout(): Promise<AxiosResponse> {
    return axios.get(LOGOUT_URL);
  }

  static async register(
    registrationData: RegistrationFormData
  ): Promise<AxiosResponse> {
    return axios.post(REGISTER_URL, registrationData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}

export default AuthService;
