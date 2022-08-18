import { POSTS_URL } from "../config/api";
import axios from "./http";

export const fetchAllPostsRequest = async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return response.data;
    // Promise.all
    // const response = await Promise.all(
    //   [POSTS, "/cities"].map((endpoint) => axios.get(endpoint))
    // );
    // const [{ data: posts }, { data: cities }] = response;
    //Abort Controller
    // const controller = new AbortController();
    // const response = await axios.get(`${POSTS}`, {
    //   signal: controller.signal,
    // });
    // return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatePostRequest = async (post) => {
  try {
    const response = await axios.put(`${POSTS_URL}/${post.id}`, post);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createPostRequest = async (post) => {
  try {
    const response = await axios.post(`${POSTS_URL}`, post);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deletePostRequest = async (post) => {
  try {
    const response = await axios.delete(`${POSTS_URL}/${post.id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
