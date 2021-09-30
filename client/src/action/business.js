import api from "../util/api";
import {
  BUSINESS_LOGIN_FAILED,
  BUSINESS_LOGIN_REQUESTED,
  BUSINESS_LOGIN_SUCCESS,
  BUSINESS_LOGOUT,
  BUSINESS_REGISTER_FAILED,
  BUSINESS_REGISTER_REQUESTED,
  BUSINESS_REGISTER_SUCCESS,
} from "../constant/types.js";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: BUSINESS_LOGIN_REQUESTED,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post("/user/login", { email, password }, config);

    dispatch({
      type: BUSINESS_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("businessInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: BUSINESS_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("businessInfo");

  dispatch({ type: BUSINESS_LOGOUT });

  document.location.href = "/business/login";
};

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: BUSINESS_REGISTER_REQUESTED,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post(
      "/user",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: BUSINESS_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: BUSINESS_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("businessInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: BUSINESS_REGISTER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
