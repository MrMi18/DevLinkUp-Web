import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "./utills/constent";

const Cards = (props) => {
   const{feedData} = props;
  const{ firstName, lastName, deignation,Age,skill,gender }  = props?.feedData||props;

const sendRequestHandler = async(status) =>{
  const response = await axios.post(BASE_URL+"/request/send/"+status+"/"+feedData._id,{},{withCredentials:true});
  
}
  
  return (
    <div className="flex justify-center items-center">
      <div className="card card-compact bg-base-300 w-96 shadow-xl mt-2">
        <figure>
          <img
            className="rounded-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH0U8GjYmI9TR8KiU8_8oebMzeY_2ufvB8A&s"
            alt="profile photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{deignation}</p>
          <div className="flex w-[20%]">
            <p>{gender}</p>
            <p>{Age}</p>
          </div>
          
          <div  className="flex  flex-wrap">
            {
            skill &&
            skill.map((skill,index) =>{
              
                 return(  <button key={index} className="btn" >  {skill} </button>)
              })
            }</div>
          <div className="card-actions justify-end">
            <div className="flex mx-auto gap-3 ">
              <button onClick={() => sendRequestHandler("Interested")}  className="btn btn-accent">Interest</button>
              <button onClick={() => sendRequestHandler("Ignored")} className="btn btn-error">Ignore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
