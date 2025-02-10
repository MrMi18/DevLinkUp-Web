import axios from "axios"
import { BASE_URL } from "./utills/constent"
import { useEffect, useState } from "react"
import Cards from "./Cards";
import { useDispatch } from "react-redux";
import addFeed from "./utills/feedSlice"



const Feed = () => {
    const dispatch = useDispatch();

    const [feedData,setFeedData ]= useState([]);
    const getFeed = async() =>{
        try{
            const response = await axios.get(BASE_URL+"/feed",{withCredentials:true});
                setFeedData(response.data)
                dispatch(addFeed(response.data));
        }catch(err){
            console.error(err.message);
        }       
       
    }

    useEffect(() =>{
        getFeed();
    } ,[])

  
  return (
    <div> 
         {console.log(feedData)}  
         
         <Cards key ={feedData?.data?._id} feedData={feedData[0]}/>
        {
            // feedData && feedData.map(data =>{
            //     // console.log(data.firstName);
            //     return 
      
           
            // })
        }   
      
    </div>
  )
}

export default Feed
