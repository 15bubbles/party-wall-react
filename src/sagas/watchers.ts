import { takeLatest } from "redux-saga/effects";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions/types";
import { registerSaga, loginSaga, logoutSaga } from "./auth";

export default function* watchAuthentication() {
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, loginSaga);
  yield takeLatest(LOGOUT_USER, logoutSaga);
}
