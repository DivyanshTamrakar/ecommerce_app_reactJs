import { getData,postData} from '../FetchingApi/fetchApi.js'
import {useEffect, useReducer,useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Toast} from "../Toast/toast"


import { Link } from "react-router-dom";


function ProductListing(){
  const [ productdata, setproductData] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect( ()=>{
    GetProductData();
  },[]);


  async function GetProductData(){
    let response = await getData('/products');
    setproductData(response.product);
  }

  
  async function AddToCartHandler(item){
    const body = {
      name: item.name,
      productModel: item.productModel,
      productUrl: item.productUrl,
      productId:item._id,
      customerId: userId,
      inStock: item.inStock,
      fastDelivery: item.fastDelivery,
      productdescription: item.productdescription,
      image: item.image,
      price: item.price,
      }
      let response = await postData(body,'/carts');
      if(response.available === true)
      {
        toast.info(response.message);
      }
      
  }
  
async function AddToWishilstHandler(item){
const body =  {
  name: item.name,
  productModel: item.productModel,
  productUrl: item.productUrl,
  productId:item._id,
  customerId: userId,
  inStock: item.inStock,
  fastDelivery: item.fastDelivery,
  productdescription: item.productdescription,
  image: item.image,
  price: item.price,
  }
  let response = await postData(body,'/wishlists');
  console.log("under wishlist");
  console.log(response);
  if(response.available === true)
      {
        toast.info(response.message);
      }
  

}
  //reducer
  const initialState = {
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    sortBy: null
  };
  const [
    { showInventoryAll, showFastDeliveryOnly, sortBy },
    dispatch
  ] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "SORT":
        return {
          ...state,
          sortBy: action.payload
        };
      case "TOGGLE_INVENTORY":
        return (state = {
          ...state,
          showInventoryAll: !state.showInventoryAll
        });

      case "TOGGLE_DELIVERY":
        return (state = {
          ...state,
          showFastDeliveryOnly: !state.showFastDeliveryOnly
        });
      default:
        console.log("sorry");
    }
  }
  function getSortedData(productdata, sortvalue) {
    if (sortvalue === "PRICE_HIGH_TO_LOW") {
      return productdata.sort((a, b) => b.price - a.price);
    }
    if (sortvalue === "PRICE_LOW_TO_HIGH") {
      return productdata.sort((a, b) => a.price - b.price);
    }

    return productdata;
  }

  
  function getfilteredData(
    dataitem,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return dataitem
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedData = getSortedData(productdata, sortBy);
  const filteredData = getfilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll
  });
    return(
     <div>
     <div className="margin1"><h1>Product Listing</h1></div>  
      <div style={{display:"grid" , gridTemplateColumns:"auto auto"}}>
        
      <div className="Sidebar">
         <fieldset style={{width:"14.2rem"}}>
<legend>
  <i class="fa fa-filter"></i>
  <span style={{fontSize:"20px",fontWeight:"bolder",marginLeft:"0.3rem"}}>Filters</span></legend>
<div style={{margin:"1rem",textAlign:"left"}}>

      <input
      onClick={()=>dispatch({type:"TOGGLE_INVENTORY"})}
      type="checkbox" name="name"/>
      <span className="margin1"></span>
      <label> Include Out Of Stock  </label>
      
     </div>

     <div style={{margin:"1rem",textAlign:"left"}}>
      <input 
      onClick={()=>dispatch({type:"TOGGLE_DELIVERY"})}
      
      type="checkbox" name="name"/>
      <span className="margin1"></span>
      <label><i class="fa fa-truck"></i> Fast Delivery  </label>

     </div>

         </fieldset>
       

<div style={{height:"1rem"}}
></div>

         <fieldset style={{width:"14.2rem"}}>
<legend><span style={{fontSize:"20px",fontWeight:"bolder",marginLeft:"0.3rem"}}>Sort By</span></legend>
<div style={{margin:"1rem",textAlign:"left"}}>
  
      <input
      onClick={()=>dispatch({type:"SORT",payload:"PRICE_LOW_TO_HIGH"})}
      type="radio" name="sort"/>
      <span className="margin1"></span>
      <label>Price Low to High</label>
     </div>

     <div style={{margin:"1rem",textAlign:"left"}}>

      <input
      onClick={()=>dispatch({type:"SORT",payload:"PRICE_HIGH_TO_LOW"})}
       type="radio" name="sort"/>
      <span className="margin1"></span>
      <label >Price High to Low </label>
     </div>

         </fieldset>
       
    
    

     
      </div>
      {
        filteredData.length!==0?
          <div className="productbox">
        {filteredData.map(function(item){
          return (
            <div key={item.id} className="productItem">
              <img className="corner-radius" src={item.image} alt="Itemimage" height="200px" width="212px"/>
              
              <div className="namelike">
                <span style={{fontWeight:"bolder"}}>{item.name}</span>
                <span onClick={()=>AddToWishilstHandler(item)}><i class="fa fa-heart" aria-hidden="true" style={{color:"grey"}}></i></span>
              </div>
              
              <span className="textArea">{item.description}</span>
              <span>{item.material}</span>
              <span>{item.fastDelivery}</span>
              <span>{item.inStock}</span>
  
              <span style={{fontWeight:"bolder"}}> Rs.{item.price}</span>
           <div className="button-group">
                
           {userId === null?
              <Link className="btn" to='/login'><button style={{backgroundColor:'navy', color:"white",border:"none"}}>Add To Cart</button></Link>
              :<button onClick={()=>AddToCartHandler(item)} className="btn">Add To Cart</button>
             }
           </div>
            </div>
          );
        })}
        </div>
        :<div className="loader"> </div>
      }
      </div>
      { Toast() }
 
     </div>
     
      );
    }
    

export default ProductListing;

