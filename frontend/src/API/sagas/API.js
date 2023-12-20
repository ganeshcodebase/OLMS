import { put } from "redux-saga/effects";
import { exceptionError, loadingStart, userLoginSuccess } from "../actions";
import { create } from "apisauce";
import Cookies from "js-cookie";

export const url = "http://localhost/";
Cookies.set('ABC', 'ABC', { sameSite: 'None', secure: true });
const api = create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
  mode:"no-cors",

  timeout: 600000,
});
const navMoniter = (response) => {};
api.addMonitor(navMoniter);

export function* UserLoginSaga(actions) {
  yield put(loadingStart());
  var data = JSON.stringify({
    usr: actions.username,
    pwd: actions.password,
  });
  try {
    const response = yield api.post("api/method/login", data);
    yield put(userLoginSuccess(response, actions.submitted));
  } catch (error) {
    yield put(exceptionError(error.toString()));
  }
}
