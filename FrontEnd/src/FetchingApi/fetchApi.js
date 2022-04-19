import axios from "axios";
import { BASE_URL } from "../Constant/base_url";
export const userId = localStorage.getItem("userId");


export async function getData(...endpoints) {
  const final_url = `${BASE_URL}${endpoints}`;
  try {
    const response = await axios.get(final_url);
    return response.data;
  } catch (e) {
    console.error("Error in catch ", e);
  }
}

export async function postData(body, ...endpoints) {
  const final_url = `${BASE_URL}${endpoints}`;
  try {
    const response = await axios.post(final_url, body);
    return response.data;
  } catch (e) {
    console.error("Error in catch ", e);
  }
}
