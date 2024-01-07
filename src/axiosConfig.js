import axios from "axios";

const instance = axios.create({
  baseURL: "https://website.mmbaic.com/api/ApiCommonController/",
});

export default instance;
