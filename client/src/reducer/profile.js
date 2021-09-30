import {
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_REQUESTED,
  GET_PROFILE_REQUESTED,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
} from "../constant/types";

export const getProfileReducer = (state = { profile: {} }, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUESTED:
      return { loading: true, profile: {} };
    case GET_PROFILE_SUCCESS:
      return { loading: false, profile: action.payload };
    case GET_PROFILE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUESTED:
      return { loading: true };
    case EDIT_PROFILE_SUCCESS:
      return { loading: false, success: true, profile: action.payload };
    case EDIT_PROFILE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
