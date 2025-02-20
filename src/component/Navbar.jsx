import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "./utills/constent";
import { removeUser } from "./utills/userSlice";


const Navbar = () => {
  const navigate = useNavigate();
  const userData = useSelector((store )=>store.user);
  const dispatch = useDispatch();
  // console.log(userData);

  const logoutHander = async () =>{
    if(!userData) return ;
   let res =  confirm("Please Confirm Logout");
   
    if(!res ) return ;
    try{
       await axios.post(BASE_URL+"/logout",{},{withCredentials: true});
    navigate("/login");
    dispatch(removeUser());
    }catch(err){
      console.error(err.message);
    }
   
  }

  
  return (
    <div>
      <div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to={userData?"/feed":"/login"} className="btn btn-ghost text-xl">DevLinkUp</Link>
  </div>
  <div className="flex-none gap-2">
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <a onClick={() =>{
      navigate("/profile")
    }} className="mr-3 cursor-pointer">{userData?.lastName}</a>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH0U8GjYmI9TR8KiU8_8oebMzeY_2ufvB8A&s"  />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to={userData?"/profile":"/login"} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connections"> Connections</Link></li> 
        <li><Link to="/Request"> Request</Link></li> 

        <li><a>Settings</a></li>
        <li><a  onClick={logoutHander}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar;
