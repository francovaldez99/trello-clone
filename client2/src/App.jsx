
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import BoardPage from './pages/BoardPage/BoardPage';
import HomePage  from './pages/HomePage/HomePage';
import Cookies from "js-cookie"; 
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import { useSelector,useDispatch } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ChangeAuth, addUser } from './redux/userSlice';
import { verifyToken } from './apí/user';
import NavBar from './components/Navbar/Navbar';
import AllBoardsPage from './pages/AllBoardsPage/AllBoardsPage';

function App() {
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  useEffect(() => {
    const checkLogin = async () => {
     
      try {
        const cookies = await Cookies.get();
        
        if (!cookies.token) {
          // console.log("🚀 ~ file: App.jsx:21 ~ checkLogin ~ cookies:", cookies)
          dispatch(ChangeAuth(false))
      
          return
      }
      const verify=await verifyToken(cookies.token)
      // console.log("🚀 ~ file: App.jsx:25 ~ checkLogin ~ verify:", verify)
      dispatch(ChangeAuth(true))
      dispatch(addUser(verify.data))

      } catch (error) {
        // console.log("🚀 ~ file: App.jsx:34 ~ checkLogin ~ error:", error)
        
        dispatch(ChangeAuth(false))
        localStorage.removeItem("user");
      }
  
    };
    checkLogin();
  }, []);
  

  useEffect(() => {
  
  }, [])
  
  return (
    <div className='' >
   
  <NavBar/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route element={<ProtectedRoute/>}>
    <Route path='/projects' element={<AllBoardsPage/>}/>
      <Route path='/board/:id' element={  <BoardPage/>}/>
      </Route>


    </Routes>



    </div>
  );
}

export default App;
