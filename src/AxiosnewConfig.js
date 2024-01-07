import axios from "axios";

const instance = axios.create({
  baseURL: "https://website.mmbaic.com/api/ApiCommonController1/",
});

export default instance;
