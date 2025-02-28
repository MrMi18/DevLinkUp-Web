import axios from "axios";
import { BASE_URL } from "./utills/constent";
import { useDispatch } from "react-redux";
import { removeUserFeed } from "./utills/feedSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cards = (props) => {
  const[userData,setUserData] = useState(props?.feedData);
  // console.log(props);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { feedData } = props;
  const { _id, firstName, lastName, designation, Age, skill, gender } =
    props?.feedData || props;

  const sendRequestHandler = async (status, userId,e) => {
    e.stopPropagation()
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFeed(userId));
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(feedData)

  return (
    <div className="flex justify-center items-center mb-10 "  onClick={() => navigate("/UserProfile",{state:{userData:feedData}})}>
      <div className="card card-compact bg-base-300 w-80 shadow-xl mt-2">
        <div className="avatar mx-auto mt-10">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH0U8GjYmI9TR8KiU8_8oebMzeY_2ufvB8A&s" />
          </div>
        </div>
        <div className="card-body my-2 ">
          <div className="mx-auto flex items-center gap-2">
            <h2 className="card-title mx-auto">{firstName + " " + lastName}  </h2>
             <p className="text-sm mx-auto">(Google) </p>
          </div>
          <p className="text-sm mx-auto mb-4"> Nagpur, Maharashtra</p>
          
          <h2>
            Skills -{" "}
            <p className="text-sm mx-auto inline">
              ({designation && designation})
            </p>
          </h2>
          <div className="flex  flex-wrap gap-3">
            {skill &&
              skill.map((skill, index) => {
                return (
                  <button key={index} className="btn btn-sm">
                    {" "}
                    {skill}{" "}
                  </button>
                );
              })}
          </div>
          <div className="card-actions justify-end">
            <div className="flex mx-auto gap-3 ">
              <button
                onClick={(e) => sendRequestHandler("Interested", _id,e)}
                className="btn btn-accent btn-sm"
              >
                Interest
              </button>
              <button
              
                onClick={(e) => sendRequestHandler("Ignored", _id,e)}
                className="btn btn-error btn-sm"
              >
                Ignore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
