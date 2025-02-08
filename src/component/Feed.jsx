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
        {
            feedData && feedData.map(data =>{
                // console.log(data.firstName);
                return <Cards key ={data?._id} firstName={data.firstName} lastName={data.lastName} deignation = {data.deignation}
                Age={data?.Age} skill={data?.skill} gender={data?.gender} />
            })
        }   
      
    </div>
  )
}

export default Feed
