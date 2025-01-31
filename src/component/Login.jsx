import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate,Link } from "react-router-dom";
import { addUser } from "./utills/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "./utills/constent";


const Login = () => {

    const [emailId,setEmailId] = useState("imran.mohd1910@gmail.com");
    const [password, setPassword] = useState("Shane@123");
    const[loginUser, setLoginUser] = useState({});
    const[authFailed,setAuthFailed] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const checkingUser = async() =>{
      try{
        const user = await axios.get(BASE_URL+"/profile/view", {withCredentials:true} );
        if(user){
          console.log("hey we found the user");
          // dispatch(addUser(user.data));
          console.log(user);
          return navigate("/profile");
        }
      }catch(err){
        console.error(err);
        return ;
      }}
      useEffect(() =>{
        checkingUser();
      },[])
    
    
    const loginHandler = async () =>{
        try{
          const res = await  axios.post(BASE_URL+"/login",{
            emailId,
            password,
        },
        {withCredentials:true}
    )
        
        setLoginUser(res.data.data);
        
        dispatch(addUser(res.data.data));
        alert("Login Succesfully");
        navigate("/profile");  //need to raplace with feed page when feed page will be ready.
        
        }
        catch(err){
            console.error(err);
            setAuthFailed(err.response.data );
        }
    }

    
    
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
          <p className="text-red-600 text-sm ">{authFailed}</p>
          <div className="card-actions justify-end m-2">
            <button className="btn btn-primary" onClick={loginHandler}>Login</button>
          </div>
          <p className="text-sm">{"Don't"} you have an account?<Link to="/Signup" className="text-base text-blue-600 pl-1">  Sign up</Link></p>
        </div>  
        
      </div>
    </div>
  );
};

export default Login;
