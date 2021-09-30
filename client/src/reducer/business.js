// bring in action types
import {
  BUSINESS_LOGIN_FAILED,
  BUSINESS_LOGIN_REQUESTED,
  BUSINESS_LOGIN_SUCCESS,
  BUSINESS_REGISTER_FAILED,
  BUSINESS_REGISTER_REQUESTED,
  BUSINESS_REGISTER_SUCCESS,
  BUSINESS_LOGOUT,
} from "../constant/types.js";

export const businessLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case BUSINESS_LOGIN_REQUESTED:
      return { loading: true };
    case BUSINESS_LOGIN_SUCCESS:
      return { loading: false, businessInfo: action.payload };
    case BUSINESS_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    case BUSINESS_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const businessRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case BUSINESS_REGISTER_REQUESTED:
      return { loading: true };
    case BUSINESS_REGISTER_SUCCESS:
      return { loading: false, businessInfo: action.payload };
    case BUSINESS_REGISTER_FAILED:
      return { loading: false, error: action.payload };
    case BUSINESS_LOGOUT:
      return {};
    default:
      return state;
  }
};
