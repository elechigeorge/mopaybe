import {
  INVESTOR_LOGIN_REQUESTED,
  INVESTOR_LOGIN_SUCCESS,
  INVESTOR_LOGIN_FAILED,
  INVESTOR_LOGOUT,
  INVESTOR_REGISTER_FAILED,
  INVESTOR_REGISTER_REQUESTED,
  INVESTOR_REGISTER_SUCCESS,
} from "../constant/types";

export const investorLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case INVESTOR_LOGIN_REQUESTED:
      return { loading: true };
    case INVESTOR_LOGIN_SUCCESS:
      return { loading: false, investorInfo: action.payload };
    case INVESTOR_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    case INVESTOR_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const investorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case INVESTOR_REGISTER_REQUESTED:
      return { loading: true };
    case INVESTOR_REGISTER_SUCCESS:
      return { loading: false, investorInfo: action.payload };
    case INVESTOR_REGISTER_FAILED:
      return { loading: false, error: action.payload };
    case INVESTOR_LOGOUT:
      return {};
    default:
      return state;
  }
};
