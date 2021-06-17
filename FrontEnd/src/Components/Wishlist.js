import { useLoader  } from "../context/LoaderContext";
import {useState,useEffect  } from "react";
import {getData,userId } from "../FetchingApi/fetchApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

function Wishlist(){
  const [wishData,setwishdata] = useState([]);
  const {loader,setloader} = useLoader();


  useEffect(()=>{
    getWishItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getWishItems = async () =>{
    setloader(true)
    try{
      let response = await getData(`/wishlists/${userId}`);
      setloader(false);
      setwishdata(response.wishlistitem)
      
    }catch(e){
      console.error("Error in catch " , e);
      setloader(false);
    }
  }

  

    return(

    loader?<div className="loader"></div>:  
    wishData.length!==0 ?
      <div className="productbox">
    {wishData.map(function(item){
      return (
        <div key={item.id} className="productItem">
          <img src={item.image} alt="itemimage"height="300px" width="100%"/>
          <div className="name-like-section">
                <div style={{display:'flex',flexDirection:'column'}}>
                  <span style={{fontWeight:'1000'}}>{item.name}</span>
                  <span style={{fontSize:'12px'}}>by Amazon Brand - Solimo</span>
                  
                  </div>
              </div>
          

              <span className="margin" style={{fontSize:'13px',color:'green',fontWeight:'bolder'}}>16,710 Reviews</span>
              <span className="margin" style={{fontSize:'15px',fontWeight:'700'}}>₹ {item.price}.00</span>
              
          
              <div className="margin" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <span style={{marginTop:'0.5rem',fontWeight:'500'}}>
                 {
                   item.fastDelivery && "Fast Delivery Available"
                 }
                </span>
                <span>
                <button className="btn" style={{backgroundColor:'red'}}><FontAwesomeIcon icon={faTrashAlt} color={"white"} size={'2x'}/></button>
                </span>
              </div>
        </div>
      );
    })}
    </div>
  
  :
  <div style={{marginTop:"10rem"}}>
<span style={{fontSize:"3rem",fontWeight:"bolder"}}>
Your Wishlist  is Empty 
</span>

  </div>
    );



    }
export default Wishlist;    
