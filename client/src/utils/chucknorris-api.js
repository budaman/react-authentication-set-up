import axios from "axios";

const BASE_URL = "http://localhost:3333";

export { getFoodData, getCelebrityData };

let getFoodData = () => {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data);
};

let getCelebrityData = () => {
  const url = `${BASE_URL}/api/jokes/celebrity`;
};