import axios from "axios";

const instance = axios.create({
  // baseURL: "http://3.6.37.16:8000",
  // baseURL: "https://gismasoft.com/mmbaicdeveloper/api/ApiCommonController",
  baseURL: "https://website.mmbaic.com/api/ApiCommonController/",
  // baseURL: "https://website.mmbaic.in/api/ApiCommonController/",
});

export default instance;
