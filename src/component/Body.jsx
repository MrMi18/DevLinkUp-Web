import {  Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import axios from "axios";
import { BASE_URL } from "./utills/constent";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utills/userSlice";
import { useEffect } from "react";


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store )=>store.user);
  const fetchUser = async() =>{
    if(userData){
      // console.log("we found the user");
      return;
    };
    try{
      // console.log("fetching the data ");
      const user = await axios.get(BASE_URL+"/profile/view", {withCredentials:true} );
      // console.log(user);
      return dispatch(addUser(user.data));
      
    }
    catch(err){
      
      if(err.status===401){
       return  navigate("/login");
      }
      
    }
  }
  useEffect(() =>{
      fetchUser();
  },[])
  

  return (
    <div>
       <Navbar/>
       <Outlet/>
       

    </div>
  )
}

export default Body
