import axios from "axios";
const baseURL = process.env.BASE_URL || "/api";

export function getHeros() {
   console.log("log: baseURL", baseURL);
   let request = axios.get(`${baseURL}/hero`);
   return request
      .then((result) => {
         return result.data;
      })
      .catch((error) => {
         return error.response.data;
      });
}
