import axios from "axios"
import { BASE_URL } from "./utills/constent"
import { useEffect, useState } from "react"
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import {addFeed }from "./utills/feedSlice"



const Feed = () => {
    const dispatch = useDispatch();

    const feedData = useSelector(state => state.feed);

    const getFeed = async() =>{
        try{
            const response = await axios.get(BASE_URL+"/feed",{withCredentials:true});
                // setFeedData(response.data)
                // console.log(response.data);
                dispatch(addFeed(response.data));
        }catch(err){
            console.error(err.message);
        }       
       
    }

    useEffect(() =>{
        getFeed();
    } ,[])

    if (!feedData || feedData.length === 0) {
        return <div>No feed data available.</div>; // Handle empty state
    }
    console.log(feedData && feedData[0]);
  
  return (
    <div> 
         
         
         <Cards  feedData={feedData[0]} />
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
