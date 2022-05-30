import axios from "axios";
const API_BASE_URL_DEV = "http://207.154.221.245:3003/api/";

export const addProject = (data) =>
  axios.post(`${API_BASE_URL_DEV}customer/addCustomerProjectRequest`, data);
