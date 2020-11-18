import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LoginUserAction,
  RegisterUserAction,
  LogoutUserAction,
} from "./types";
import { LoginFormData, RegistrationFormData } from "../shared/interfaces/auth";

export const registerUser = (
  registrationData: RegistrationFormData
): RegisterUserAction => {
  return {
    type: REGISTER_USER,
    payload: registrationData,
  };
};

export const loginUser = (loginData: LoginFormData): LoginUserAction => {
  return {
    type: LOGIN_USER,
    payload: loginData,
  };
};

export const logoutUser = (): LogoutUserAction => {
  return {
    type: LOGOUT_USER,
    payload: {},
  };
};
