import { POSTS } from "./constants";
import axios from "./http";

export const fetchAllPosts = async () => {
  try {
    const response = await axios.get(`${POSTS}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
