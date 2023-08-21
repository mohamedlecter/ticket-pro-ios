import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  GET_USER,
  GET_USER_FAIL,
  GET_USERS,
  GET_USERS_FAIL,
  DELETE_USER,
  DELETE_USER_FAIL,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
} from "../constants/users";
import axios from "axios";
import API from "../../api";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${API}/user/login`, {
      email,
      password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const loginAdmin = (adminId, birthdate) => async (dispatch) => {
  console.log(adminId)
  console.log(birthdate)
  try {
    const res = await axios.post(`${API}/admin/adminLogin`, {
      adminId,
      birthdate,
    });

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error, "\n from error");
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const signup = (name, email, password, phone) => async (dispatch) => {
  try {
    const data = await axios.post(`${API}/user/signup`, {
      name,
      email,
      password,
      phone,
    });

    console.log(data);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const updateUser = (id, name, email, password) => async (dispatch) => {
  try {
    const res = await axios.put(`${API}/user/${id}`, {
      name,
      email,
      password,
    });
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API}/user/${id}`);
    dispatch({
      type: DELETE_USER,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/user/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4000/api/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error.response.data.msg,
    });
  }
};
