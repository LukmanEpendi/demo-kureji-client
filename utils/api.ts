import axios from "axios";

export const api = axios.create({
  baseURL: `pilketosserver.herokuapp.com`,
  withCredentials: true,
});
// this file is curently ignored in gitignore
