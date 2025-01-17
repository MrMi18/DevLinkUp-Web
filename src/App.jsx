import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"
import { Provider } from "react-redux"
import userStore from "./component/utills/userStore"



function App() {
 

  return (
    <>
    <Provider store={userStore}>
      <BrowserRouter  basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
             <Route  path="/login" element={<Login/>}/>    
             <Route path="/profile" element={<Profile/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
