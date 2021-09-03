import axios from "axios";

 export const url = "https://thawing-spire-10182.herokuapp.com"
// export const url = "http://localhost:5000";
// userId which comes from local storage
export const userId = localStorage.getItem("userId");
export async function getData(...endpoints) {
  let final_url = `${url}${endpoints}`;
  try {
    let response = await axios.get(final_url);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}

export async function postData(body, ...endpoints) {
  let final_url = `${url}${endpoints}`;
  try {
    let response = await axios.post(final_url, body);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}
