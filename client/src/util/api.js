import axios from "axios";
import store from "../store";
import { BUSINESS_LOGOUT } from "../constant/types";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the business account if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: BUSINESS_LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
