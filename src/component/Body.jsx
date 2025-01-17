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
    if(userData)return;
    try{
      const user = await axios.get(BASE_URL+"profile/view",{withCredentials:true} );
      dispatch(addUser(user.data));
      console.log(user.data);
    }
    catch(err){
      if(err.status===401){
        navigate("/login");
      }
      console.error(err);
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
