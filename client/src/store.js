import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  businessLoginReducer,
  businessRegisterReducer,
} from "./reducer/business";

import {
  investorLoginReducer,
  investorRegisterReducer,
} from "./reducer/investor";

import { editProfileReducer, getProfileReducer } from "./reducer/profile";

const reducer = combineReducers({
  // students reducers list
  businessLogin: businessLoginReducer,
  businessRegister: businessRegisterReducer,

  // admin reducers list
  investorLogin: investorLoginReducer,
  investorRegister: investorRegisterReducer,

  // course reducer
  editProfile: editProfileReducer,
  getProfile: getProfileReducer,
});

const studentInfoFromStorage = localStorage.getItem("studentInfo")
  ? JSON.parse(localStorage.getItem("studentInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  studentLogin: { studentInfo: studentInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
