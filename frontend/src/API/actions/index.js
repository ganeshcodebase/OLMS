import {
  EXCEPTION_ERROR,
  LOADING_START,
  LOGIN_SUCCESS,
  RESET_EXCEPTION_ERROR,
  SESSION_API_ERROR,
  SESSION_EXPIRE_ERROR,
  USER_LOGIN_INITIATE,
} from "./actionTypes";

export const exceptionError = (response) => {
  return {
    type: EXCEPTION_ERROR,
    ISError: response,
  };
};
export const exceptionSessionExpire = (response) => {
  return {
    type: SESSION_EXPIRE_ERROR,
    sessionError: response,
    test: test,
  };
};
export const exceptionAPIError = (response) => {
  return {
    type: SESSION_API_ERROR,
    apiError: response,
  };
};
export const resetExceptionError = (response) => {
  return {
    type: RESET_EXCEPTION_ERROR,
  };
};

export const loadingStart = () => {
  return {
    type: LOADING_START,
  };
};
export const userLogin = (username, password, submitted) => {
  return {
    type: USER_LOGIN_INITIATE,
    username,
    password,
    submitted,
  };
};
export const userLoginSuccess = (response, submitted) => {
  return {
    type: LOGIN_SUCCESS,
    userDetails: response,
    submitted,
  };
};
