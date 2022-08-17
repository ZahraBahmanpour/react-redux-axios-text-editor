import { POSTS } from "../config/api";
import axios from "./http";

export const fetchAllPostsRequest = async () => {
  try {
    const response = await axios.get(`${POSTS}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatePostRequest = async (post) => {
  try {
    const response = await axios.put(`${POSTS}/${post.id}`, post);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createPostRequest = async (post) => {
  try {
    const response = await axios.post(`${POSTS}`, post);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deletePostRequest = async (post) => {
  try {
    const response = await axios.delete(`${POSTS}/${post.id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
