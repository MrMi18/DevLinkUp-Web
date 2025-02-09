import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"
import { Provider } from "react-redux"
import userStore from "./component/utills/userStore"
import Signup from "./component/Signup"
import Feed from "./component/Feed"
import EditProfile from "./component/EditProfile"
import Connections from "./component/Connections"



function App() {
 

  return (
    <>
    <Provider store={userStore}>
      <BrowserRouter  basename="/">
        <Routes>
             <Route path="/" element={<Body/>}>
             <Route path="/" element={<Feed/>}/>
             <Route  path="/login" element={<Login/>}/>    
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/profile/edit/:userId" element={<EditProfile/>}/>
             <Route path="/Signup" element={<Signup/>}/>
             <Route path ="/connections" element={<Connections/>}/>
            
          </Route>
          
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
