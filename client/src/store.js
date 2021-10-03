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

const businessInfoFromStorage = localStorage.getItem("businessInfo")
  ? JSON.parse(localStorage.getItem("businessInfo"))
  : null;

const investorInfoFromStorage = localStorage.getItem("investorInfo")
  ? JSON.parse(localStorage.getItem("investorInfo"))
  : null;

const initialState = {
  businessLogin: { businessInfo: businessInfoFromStorage },
  investorLogin: { investorInfo: investorInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
