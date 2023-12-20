import {
  EXCEPTION_ERROR,
  LOADING_START,
  LOGIN_SUCCESS,
  RESET_EXCEPTION_ERROR,
  SESSION_API_ERROR,
  SESSION_EXPIRE_ERROR,
} from "../actions/actionTypes";

const initialState = {
  formSubmitted: false,
  userDetails: [],
  isLoggedin: false,
  isSessionExpiry: false,
  isInternalServerError: false,
  showLoading: false,
  isSessionAPIError: false,
  isSessionLive: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        showLoading: true,
      };

    case SESSION_EXPIRE_ERROR:
      return {
        ...state,
        isSessionExpiry: true,
        showLoading: false,
      };
    case SESSION_API_ERROR:
      return {
        ...state,
        apiError: action.apiError,
        showLoading: false,
        isSessionAPIError: true,
      };
    case EXCEPTION_ERROR:
      return {
        ...state,
        ISError: action.ISError,
        showLoading: false,
        isInternalServerError: true,
      };
    case RESET_EXCEPTION_ERROR:
      return {
        ...state,
        ISError: action.ISError,
        showLoading: false,
        isInternalServerError: false,
        isSessionAPIError: false,
      };
    case LOGIN_SUCCESS:
      localStorage.clear();
      localStorage.setItem("userDetails", JSON.stringify(action.userDetails));
      return {
        ...state,
        userDetails: action.userDetails,
        submitted: action.submitted,
        isLoginFetched: true,
        isSessionLive: true,
        isSessionExpiry: false,
        isSessionAPIError: false,
        isInternalServerError: false,
        showLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
