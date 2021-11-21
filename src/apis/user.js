import axiosClient from "./axiosClient";

// const baseUrl = process.env.REACT_APP_AUTH_API;
const baseUrl = 'http://localhost:8017/user';


const userAPI = {
  login: (params) => {
    const url = baseUrl + "/login";
    return axiosClient.post(url, { params });
  },
  getMe: () => {
    const url = 'http://localhost:8017/user/register';
    return axiosClient.get(url);
  },
  logout: () => {
    const url = baseUrl + "/logout";
    return axiosClient.delete(url);
  },
  register: (params) => {
    const url = baseUrl + "/register";
    return axiosClient.post(url, { params });
  },
  refresh: () => {
    const url = baseUrl + "/token";
    const refreshToken = localStorage.refresh;
    return axiosClient.post(url, { refreshToken });
  },
  updateProfile: (params) => {
    const url = baseUrl + "/update";
    return axiosClient.put(url, { params });
  },
  updatePassword: (params) => {
    const url = baseUrl + "/change-password";
    return axiosClient.put(url, { params });
  },
  updateHobbyTopic: (params) => {
    const url = baseUrl + "/update-interest";
    return axiosClient.put(url, { params });
  },
  getUserInfo: (params) => {
    const url = baseUrl + "/user-infor";
    return axiosClient.post(url, { params });
  },
};

export default userAPI;
