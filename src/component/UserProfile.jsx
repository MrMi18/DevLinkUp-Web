import { useLocation } from "react-router-dom";
import { photoUrl } from "./utills/constent"
import { useState } from "react";


const UserProfile = () => {
    const location = useLocation();
    const [userData,setUserData] = useState(location?.state.userData);
    console.log(userData)
  return (
    
      <div className="card bg-base-300 w-96 shadow-xl mt-6 mx-auto mb-10">
  <figure>
    <img
      src={photoUrl}
      alt="User" className="w-[90%] box-content object-contain h-1/3" />
    
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {userData.firstName} {"  "}{userData.lastName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Mern Stack developer with 2 years of experience</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">React Js</div>
      <div className="badge badge-outline">Node Js</div>
      <div className="badge badge-outline">express Js</div>
      <div className="badge badge-outline">Mongo Js</div>
    </div>
  </div>
</div>
   
  )
}

export default UserProfile

