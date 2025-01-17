import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { addUser } from "./utills/userSlice";
import { useDispatch } from "react-redux";


const Login = () => {

    const [emailId,setEmailId] = useState("golu@gmail.com");
    const [password, setPassword] = useState("Shane@123");
    const[loginUser, setLoginUser] = useState({});
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const loginHandler = async () =>{
        try{
          const res = await  axios.post("http://localhost:3000/login",{
            emailId,
            password,
        },
        {withCredentials:true}
    )
        
        setLoginUser(res.data.data);
        
        dispatch(addUser(res.data.data));
        alert("Login Succesfully");
        Navigate("/profile");
        // console.log(res);
        }
        catch(err){
            console.error(err);
        }
    }
    
    
    console.log(loginUser);
  return (
    <div className="flex justify-center  my-10">
      <div className="card bg-base-300 text-neutral-content w-96 hover:shadow-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>

          <label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder=""
              value={emailId}
              onChange={(e) =>{
                setEmailId( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>
          <label className="form-control w-full max-w-xs p-1">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder=""
              value={password}
              onChange={(e) =>{
                setPassword( e.target.value);
               }}
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>

          <div className="card-actions justify-end m-2">
            <button className="btn btn-primary" onClick={loginHandler}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
