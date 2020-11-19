import { call, put } from "redux-saga/effects";
import { loginUser, registerUser } from "../actions/auth";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../actions/types";
import AuthService from "../services/auth.service";

export function* registerSaga({ payload }: ReturnType<typeof registerUser>) {
  try {
    const response = yield call(AuthService.register, payload);
    yield put({ type: REGISTER_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, payload: error });
  }
}

export function* loginSaga({ payload }: ReturnType<typeof loginUser>) {
  try {
    const response = yield call(AuthService.login, payload);
    yield put({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error });
  }
}

export function* logoutSaga() {
  try {
    const response = yield call(AuthService.logout);
    yield put({ type: LOGOUT_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, payload: error });
  }
}
