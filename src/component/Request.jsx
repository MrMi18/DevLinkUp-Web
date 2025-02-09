import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "./utills/constent";


const Request = () => {

    const [requestList, setRequestList] = useState([]);


    const requestUpdate = async(status,id)=>{
          try{
              await axios.post(BASE_URL+"/request/review/"+status+"/"+id,{},{withCredentials:true});
              setRequestList(requestList.filter(e => e._id!=id));
          }catch(err){
            console.error(err.meeage);
          }
    }


    const fetchRequest = async() =>{
      try{
        const requests = await axios.get(BASE_URL+"/user/requests/list",{withCredentials:true});   
        setRequestList(requests.data);  
      }catch(err){
        console.error(err.message );
      }
          
    }
    useEffect(() =>{
        fetchRequest();
    },[])
    

  return (
    <div >
    <h1 className="text-2xl font-semibold text-center my-4">Requests</h1>
    <div className="flex flex-col items-center gap-4  ">
    {
     requestList &&  requestList.map(request =>{
    
      return(

        <div key={request._id} className="flex items-center gap-3 w-2/4 bg-base-300 p-4 rounded-lg justify-between hover:shadow-lg">
          <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH0U8GjYmI9TR8KiU8_8oebMzeY_2ufvB8A&s"
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{request.fromUserId.firstName} {request.fromUserId.lastName}</div>
            <div className="text-sm opacity-50">{request.fromUserId.deignation}</div>
          </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="btn  btn-outline btn-success" onClick={()=>requestUpdate("Accepted",request._id)}>Accept</button>
            <button className="btn  btn-outline btn-error" onClick={()=>requestUpdate("Rejected",request._id)}>Reject</button>
          </div>
        </div>   
      )
          
      })
      
    }
    
</div>
</div>
  )
}

export default Request
