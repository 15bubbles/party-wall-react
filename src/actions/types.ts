import { LoginFormData, RegistrationFormData } from "../shared/interfaces/auth";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export interface LoginUserAction {
  type: typeof LOGIN_USER | typeof LOGIN_FAILURE | typeof LOGIN_SUCCESS;
  payload: LoginFormData;
}

export interface LogoutUserAction {
  type: typeof LOGOUT_USER | typeof LOGOUT_FAILURE | typeof LOGOUT_SUCCESS;
  payload: object;
}

export interface RegisterUserAction {
  type:
    | typeof REGISTER_USER
    | typeof REGISTER_FAILURE
    | typeof REGISTER_SUCCESS;
  payload: RegistrationFormData;
}

export interface AuthenticationState {
  isAuthenticated: boolean;
  user: null | object;
}

export type AuthenticationActionTypes =
  | LoginUserAction
  | LogoutUserAction
  | RegisterUserAction;
