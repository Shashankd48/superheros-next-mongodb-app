import axios from "axios";
const baseURL = process.env.BASE_URL || "/api";

export function getHeros() {
   let request = axios.get(`${baseURL}/hero`);
   return request
      .then((result) => {
         return result.data;
      })
      .catch((error) => {
         return error.response.data;
      });
}

export function getHeroById(id) {
   let request = axios.get(`${baseURL}/hero/${id}`);
   return request
      .then((result) => {
         return result.data;
      })
      .catch((error) => {
         return error.response.data;
      });
}

export function deleteHero(id) {
   let request = axios.delete(`${baseURL}/hero/${id}`);
   return request
      .then((result) => {
         return result.data;
      })
      .catch((error) => {
         return error.response.data;
      });
}

export function addHero(superHero, realName) {
   let request = axios.post(`${baseURL}/hero`, { superHero, realName });
   return request
      .then((result) => {
         return result.data;
      })
      .catch((error) => {
         return error.response.data;
      });
}

export function updateHero(id, superHero, realName) {
   let request = axios.put(`${baseURL}/hero/${id}`, { superHero, realName });
   return request
      .then((result) => {
         return result.data;
      })
      .catch((error) => {
         return error.response.data;
      });
}
