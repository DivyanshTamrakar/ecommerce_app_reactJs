import axios from 'axios';


export const url = "https://ecommerceappbackend.divyanshtamraka.repl.co";
export async  function getData(...endpoints){
    // console.log(`${url}${endpoints}`)
    try{
        let response = await axios.get(`${url}/products`);
        const resultData = response.data;
        // console.log(resultData);
        return resultData;
      }catch(e){
        console.log("Error in catch " , e);
      }
    
}

