import api from "../util/api";
import {
  INVESTOR_LOGIN_FAILED,
  INVESTOR_LOGIN_REQUESTED,
  INVESTOR_LOGIN_SUCCESS,
  INVESTOR_LOGOUT,
  INVESTOR_REGISTER_FAILED,
  INVESTOR_REGISTER_REQUESTED,
  INVESTOR_REGISTER_SUCCESS,
} from "../constant/types";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: INVESTOR_LOGIN_REQUESTED,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post(
      "/investor/login",
      { email, password },
      config
    );

    dispatch({
      type: INVESTOR_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("businessInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: INVESTOR_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("investorInfo");

  dispatch({ type: INVESTOR_LOGOUT });

  document.location.href = "/investpr/login";
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: INVESTOR_REGISTER_REQUESTED,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post(
      "/investor",
      { name, email, password },
      config
    );

    dispatch({
      type: INVESTOR_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: INVESTOR_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("investorInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: INVESTOR_REGISTER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
