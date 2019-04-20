import axios from "axios";

const baseURLAPI = "https://hacktiv8-blog.luqmanul.com/v1/";

export default axios.create({
  baseURL: baseURLAPI,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.token
  }
});
