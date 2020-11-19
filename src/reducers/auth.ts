import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  AuthenticationState,
  AuthenticationActionTypes,
} from "../actions/types";

const authReducers = (
  state: AuthenticationState = {
    isAuthenticated: false,
    user: null,
  },
  action: AuthenticationActionTypes
) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducers;
