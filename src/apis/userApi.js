import axiosClient from "./axiosClient";
const baseUrl = "http://localhost:8017";

const userAPIs = {
  login: (params) => {
    const url = baseUrl + "/user/login";
    return axiosClient.post(url, { params });
  },
  register: (params) => {
    const url = baseUrl + "/user/register";
    return axiosClient.post(url, { params });
  },
};

export default userAPIs;
