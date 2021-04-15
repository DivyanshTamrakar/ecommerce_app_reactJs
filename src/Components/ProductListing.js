import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import {useReducer} from 'react'


// const arr = [
//   {
//     id:1,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
//   {
//     id:2,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
//   {
//     id:3,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
//   {
//     id:4,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
//   {
//     id:5,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
//   {
//     id:6,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
//   {
//     id:7,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
//   {
//     id:8,
//     prodcutImg : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347551/2019/12/3/8270193c-9329-4f2f-961e-4b6077ac54211575363237664-HIGHLANDER-Men-White--Light-Blue-Slim-Fit-Striped-Casual-Shi-6.jpg",
//     productTitle : "HIGHLANDER",
//     productdescription:"Men White & Sea Green Slim Fit Striped Casual Shirt",
//     price : 673,
//     discount:"60%",
//   },
 



// ];

import faker from "faker";

faker.seed(123);

const arr = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  description :faker.commerce.productDescription(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));











function ProductListing(){
    const {itemInCart,setIteminCart} = useCart();
  const {WishItemInCart,setWishItemInCart} = useWishlist();

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

  const sortedData = getSortedData(arr, sortBy);
  const filteredData = getfilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll
  });
    return(
     <div>
     <div className="margin1"><h1>Product Listing</h1></div>  
      <div style={{display:"grid" , gridTemplateColumns:"auto auto"}}>
        
      <div className="Sidebar">
         <fieldset>
<legend><i class="fa fa-filter"></i><span style={{fontSize:"20px",fontWeight:"bolder",marginLeft:"0.3rem"}}>Filters</span></legend>
<div style={{marginTop:"1rem",textAlign:"center"}}>

      <input
      onClick={()=>dispatch({type:"TOGGLE_INVENTORY"})}
      type="checkbox" name="name"/>
      <span className="margin1"></span>
      <label> Include Out Of Stock  </label>
      
     </div>

     <div style={{marginTop:"1rem"}}>
      <input 
      onClick={()=>dispatch({type:"TOGGLE_DELIVERY"})}
      
      type="checkbox" name="name"/>
      <span className="margin1"></span>
      <label><i class="fa fa-truck"></i> Fast Delivery  </label>

     </div>

         </fieldset>
       

<div style={{height:"3rem"}}
></div>

         <fieldset>
<legend><span style={{fontSize:"20px",fontWeight:"bolder",marginLeft:"0.3rem"}}>Sort By</span></legend>
<div style={{marginTop:"1rem",textAlign:"center"}}>
  
      <input
      onClick={()=>dispatch({type:"SORT",payload:"PRICE_LOW_TO_HIGH"})}
      type="radio" name="sort"/>
      <span className="margin1"></span>
      <label>Price Low to High</label>
     </div>

     <div style={{marginTop:"1rem"}}>

      <input
      onClick={()=>dispatch({type:"SORT",payload:"PRICE_HIGH_TO_LOW"})}
       type="radio" name="sort"/>
      <span className="margin1"></span>
      <label >Price High to Low </label>
     </div>

         </fieldset>
       
    
    

     
      </div>
        <div className="productbox">
      {filteredData.map(function(item){
        return (
          <div key={item.id} className="productItem">
            <img className="corner-radius" src={item.image} height="200px" width="212px"/>
            
            <div className="namelike">
              <span style={{fontWeight:"bolder"}}>{item.name}</span>
              <span onClick={()=>setWishItemInCart((items)=>
          [...items,item]
          )}><i class="fa fa-heart" aria-hidden="true" style={{color: WishItemInCart.find((i) => i.id === item.id)
            ? "red"
            : "grey"}}></i></span>
            </div>
            <span>{item.description}</span>
            <span>{item.material}</span>
            <span>{item.fastDelivery}</span>
            <span>{item.inStock}</span>

            <span style={{fontWeight:"bolder"}}> Rs.{item.price}</span>
         <div className="button-group">
              
         <button onClick={()=>setIteminCart((items)=>
          [...items,item]
          )} className="btn">Add To Cart</button>
         </div>
          </div>
        );
      })}
      </div>
      </div>
    

     </div>
     
      );
    }
    

export default ProductListing;

