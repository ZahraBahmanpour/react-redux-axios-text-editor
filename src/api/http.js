import axios from "axios";
import { BASE_URL, LOGIN_URL } from "../config/api";
import { ACCESS_TOKEN } from "../config/constants";

// export default axios.create({
//   baseURL: BASE_URL,
// });
axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use((req) => {
  if (req.url !== LOGIN_URL) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    req.headers.token = token;
  }
  return req;
});
export default axios;
