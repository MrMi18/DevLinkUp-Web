import axios from "axios"
import { BASE_URL } from "./utills/constent"
import { useEffect, useState } from "react";

const Connections = () => {
  const [connections,setConnections] = useState(null);

const fetchConnection = async() =>{
  const connection = await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
  setConnections(connection.data);
  
}
useEffect(() =>{
  fetchConnection();
},[]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-4">Connections</h1>
      <div className="flex flex-col items-center gap-4 ">
      {
       connections &&  connections.map(connection =>{
        return(

          <div key={connection._id} className="flex items-center gap-3 w-2/4">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH0U8GjYmI9TR8KiU8_8oebMzeY_2ufvB8A&s"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{connection.firstName} {connection.lastName}</div>
              <div className="text-sm opacity-50">{connection.deignation}</div>
            </div>
          </div>   
        )
            
        })
        
      }
      
</div>
</div>
      
 
  )
}

export default Connections
