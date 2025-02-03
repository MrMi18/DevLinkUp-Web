import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  const getProfile = async () => {
    try {
      const res = await axios.get("http://localhost:3000/profile/view", {
        withCredentials: true,
      });
      setProfileData(res.data);
      console.log(res);
    } catch (err) {
      console.error(err.meesage);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <div className="flex justify-center  my-10">
        <div className="card bg-base-300 text-neutral-content w-96  hover:shadow-md">
          <div className="avatar mx-auto mt-10">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH0U8GjYmI9TR8KiU8_8oebMzeY_2ufvB8A&s" />
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Profile</h2>

            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
              readOnly
                type="text"
                placeholder=""
                value={profileData?.firstName + " " + profileData?.lastName}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Designation</span>
              </div>
              <input
              readOnly
                type="text"
                placeholder=""
                value={profileData?.deignation }
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Age</span>
              </div>
              <input
              readOnly
                type="number"
                placeholder={!profileData?.Age?"Not Specified":profileData?.Age}
                value={profileData?.Age}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <input
              readOnly
                type="text"
                placeholder=""
                value={profileData?.gender}
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Email </span>
              </div>
              <input
              readOnly
                type="text"
                placeholder={profileData?.emailID}
                value={profileData?.emailID}
               
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <div  className="flex  flex-wrap">
            {
            profileData?.skill &&
            profileData?.skill.map((skill,index) =>{
              
                 return(  <button key={index} className="btn" >  {skill} </button>)
              })
            }</div>

            <p className="text-red-600 text-sm "> </p>
            <div className="card-actions justify-end mx-auto">
              <button className="btn btn-primary text-lg">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
