import { fork } from "redux-saga/effects";
import watchAuthentication from "./watchers";

export default function* rootSaga() {
  yield fork(watchAuthentication);
}
