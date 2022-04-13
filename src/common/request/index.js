/* eslint-disable no-console */

import axios from "axios";
import { BASE_URL, TIMEOUT_VALUE } from "../constants";
import Cookies from "js-cookie";

// Headers
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// Axios Instance
export const Axios = axios.create({
  baseURL: BASE_URL,
  // headers,
  defaults: { timeout: TIMEOUT_VALUE },
});

Axios.interceptors.response.use((response) => {
  // console.log("Response:", response?.config);
  return response;
});

// Axios Instance
// export const authAxios = (
//   access_token,
//   not_local_store,
//   customHeaders = {}
// ) => {
//   let token = "";
//   if (not_local_store) {
//     token = access_token;
//   } else {
//     token = Cookies.get("access_token");
//   }
//   return axios.create({
//     baseURL: BASE_URL,
//     headers: { ...headers, Authorization: token, ...customHeaders },
//     defaults: { timeout: TIMEOUT_VALUE },
//   });
// };
