import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"
import { Provider } from "react-redux"
import userStore from "./component/utills/userStore"
import Signup from "./component/Signup"
import Feed from "./component/Feed"



function App() {
 

  return (
    <>
    <Provider store={userStore}>
      <BrowserRouter  basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
             <Route  path="/login" element={<Login/>}/>    
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/Signup" element={<Signup/>}/>
             <Route path="/feed" element={<Feed/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
