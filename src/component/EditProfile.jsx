import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "./utills/constent";
import Cards from "./Cards";


const EditProfile = () => {
    const userData = useSelector((store )=>store.user);
    const navigate = useNavigate();
    const {userId} = useParams();
    const[firstName, setFirstName] = useState(userData?.firstName||"");
    const[lastName, setLastName] = useState(userData?.lastName||"")
    const[age, setAge] = useState(userData?.Age||"Not Specified");
    const[gender, setGender] = useState(userData?.gender||"Not Specified");
    const[deignation, setDesignation] = useState(userData?.deignation||"");
    const [skills, setSkills] = useState(userData?.skill ? userData.skill : []);
    const [addingSkill, setAddingSkill] = useState("");
    console.log(skills);
   
     const  addSkilHandler = () =>{
       if(addingSkill.trim().length>0){
        setSkills((prevSkills) => [...prevSkills, addingSkill]);
        setAddingSkill("")
       }
     }
     const removeSkillHandler = (i) =>{
      setSkills((prevSkills) => prevSkills.filter((_, index) => index !== i));
     
     }
    
     const submitHandler = async() =>{
      console.log("upadating profile")
        try{ 
            await axios.patch(BASE_URL+"/profile/edit/"+userId,{
                firstName,
                lastName,
                Age:age,
                gender,
                deignation

            },
                {withCredentials:true});
            alert("Profile updated succesfully");
            navigate("/profile");
        }catch(err){
            console.error(err.message);
        }
     }
    
  return (
    <div className="flex justify-center items-start gap-3 mt-10 ">
    <div>
      <div className="flex justify-center  ">
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
             
                type="text"
                placeholder=""
                value= {firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Designation</span>
              </div>
              <input
          
                type="text"
                placeholder=""
                onChange={(e) => setDesignation(e.target.value)}
                value= {deignation }
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Age</span>
              </div>
              <input
         
                type="number"
                placeholder= {age}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <input
                type="text"
                placeholder=""
                value={gender}
                list="gender"
                onChange={(e) => setGender(e.target.value)}
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
                placeholder= {userData?.emailID}
                value=""
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          <button className="mt-6 text-lg font-semibold">Skills</button>
          <div className="flex gap-4 items-center w-[100%]">
            <label className="form-control w-full max-w-xs p-1">
              <input
              onChange={(e) => setAddingSkill(e.target.value)}
                type="text"
                placeholder= "Enter Your Skill"
                value={addingSkill}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
              <button onClick={addSkilHandler}  className="btn bg-base-100" >Add</button>
            </div>
            <div  className="flex  flex-wrap gap-3">
            {
            skills.length>0 &&
            skills.map((skill,index) =>{
              
                 return(  <span key={index} className="btn" >  {skill} <button className="btn btn-circle">
                  <svg onClick={() => removeSkillHandler(index) } xmlns="http://www.w3.org/2000/svg"className="h-4 w-4"
                    fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path   strokeLinecap="round"   strokeLinejoin="round"   strokeWidth="2"   d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button></span>)
              })
            }
            </div>

            <p className="text-red-600 text-sm "> </p>
            <div className="card-actions justify-end mx-auto gap-4">
              {/* <button className="btn btn-primary text-lg">Edit</button> */}
              <button onClick={()=> navigate("/profile")} className="btn btn-primary text-lg">Cancel</button>
              <button className="btn btn-primary text-lg" onClick={submitHandler}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    {/* <div className="">
        <Cards firstName ={firstName} lastName={lastName} Age = {age} deignation= {deignation} gender={gender}  skill={skills}/>
    </div> */}
    </div>
  )
}

export default EditProfile
