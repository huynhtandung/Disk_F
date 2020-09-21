import axios from "./../utils/axios";

const API_ENDPOINT = "https://5eb4d25b2b81f7001630889b.mockapi.io";

const url = "programing-language";

export const apiGetList = () => {
  return axios.get(`${API_ENDPOINT}/${url}`);
};

const url1 = "programing-language";

export const apiAddList = (params = {}) => {
  return axios.post(`${API_ENDPOINT}/${url1}`, params);
};
