import axios from "axios";

export const api = axios.create({
  baseURL: `https://demo-kureji.herokuapp.com`,
  withCredentials: true,
});
// this file is curently ignored in gitignore
