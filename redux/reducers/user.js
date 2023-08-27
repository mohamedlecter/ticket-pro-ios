import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  LOGOUT,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  GET_USER,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USER_FAIL,
  DELETE_USER,
  DELETE_USER_FAIL,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
} from "../constants/users";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: true,
  msg: null,
  isAdmin: false,
};

export default userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    case GET_USERS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
        isAdmin: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
        isAdmin: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
        isAdmin: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isAdmin: true,
        isAuth: false,
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};
