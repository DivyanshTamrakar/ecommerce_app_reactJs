import axios from "axios";

 export const url = "https://divecommercebackend.herokuapp.com";
// export const url = "http://localhost:5000";
// userId which comes from local storage
export const userId = localStorage.getItem("userId");
export async function getData(...endpoints) {
  const final_url = `${url}${endpoints}`;
  try {
    const response = await axios.get(final_url);
    return response.data;
  } catch (e) {
    console.error("Error in catch ", e);
  }
}

export async function postData(body, ...endpoints) {
  const final_url = `${url}${endpoints}`;
  try {
    const response = await axios.post(final_url, body);
    return response.data;
  } catch (e) {
    console.error("Error in catch ", e);
  }
}
