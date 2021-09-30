import api from "../util/api";
import {
  EDIT_PROFILE_REQUESTED,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  GET_PROFILE_REQUESTED,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
} from "../constant/types";
import { logout } from "./business";

export const getProfile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PROFILE_REQUESTED });

    const {
      businessLogin: { businessInfo },
    } = getState();

    const config = {
      headers: {
        "auth-token": `${businessInfo.token}`,
      },
    };

    const { data } = await api.get("/profile", config);

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editProfile = (profile) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EDIT_PROFILE_REQUESTED,
    });

    const {
      businessLogin: { businessInfo },
    } = getState();

    const config = {
      headers: {
        "auth-token": `${businessInfo.token}`,
      },
    };

    const { data } = await api.post(`/profile`, profile, config);

    dispatch({
      type: EDIT_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: EDIT_PROFILE_FAILED,
      payload: message,
    });
  }
};
