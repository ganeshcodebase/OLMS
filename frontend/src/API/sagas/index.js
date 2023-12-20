import { takeEvery } from "redux-saga/effects";
import { UserLoginSaga } from "./API";
import { USER_LOGIN_INITIATE } from "../actions/actionTypes";


export function* root() {
  yield takeEvery(USER_LOGIN_INITIATE, UserLoginSaga);
}
