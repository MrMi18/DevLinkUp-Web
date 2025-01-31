import axios from "axios";
import {  useState } from "react";
import { BASE_URL } from "./utills/constent";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./utills/userSlice";

const Signup = () => {
    const [emailID,setEmailID] = useState("");
    const [password,setPassword] = useState("");
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

const signupHander= async () =>{
    try{
        const res = await axios.post(BASE_URL+"/Signup",{
        emailID,password,firstName,lastName
    },{withCredentials:true})

    dispatch(addUser(res.data.data));
    navigate("/profile");

    }catch(err){
        let errMessage = err.response.data.data;
        console.log(errMessage.includes(`User validation failed: ${"emailID"}:`))
        if(errMessage.includes(`User validation failed: ${"emailID"}:`)){
            errMessage = errMessage.replace(`User validation failed: ${"emailID"}:`, "");
            setError(errMessage);
        }else{
            setError(err.response.data.data||"something went wrong");
        }
       
       
        
    }
    
    
}
    
  return (
    <div>
        <div className="flex justify-center  my-10">
      <div className="card bg-base-300 text-neutral-content w-96  hover:shadow-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Signup</h2>
            <div className=" w-full max-w-xs p-1 flex flex-grow-0 ">
            <label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              placeholder=""
              value={firstName}
              onChange={(e) =>{
                setFirstName( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label><label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              placeholder=""
              value={lastName}
              onChange={(e) =>{
                setLastName( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>
            </div>
          {/* <label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              placeholder=""
              value={firstName}
              onChange={(e) =>{
                setFirstName( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>
          <label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              placeholder=""
              value={lastName}
              onChange={(e) =>{
                setLastName( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label> */}
          
          <label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">Email </span>
            </div>
            <input
              type="text"
              placeholder=""
              value={emailID}
              onChange={(e) =>{
                setEmailID( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>
         
          <label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder=""
              value={password}
              onChange={(e) =>{
                setPassword( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>
          <p className="text-red-600 text-sm ">{error}</p>
          <div className="card-actions justify-end m-2">
            <button className="btn btn-primary" onClick={signupHander} >Signup</button>
          </div>
        <p className="text-sm">Already have an account?<Link to="/login" className="text-base text-blue-600 pl-1">  Login</Link></p>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
