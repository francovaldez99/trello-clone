import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { removeUser } from '../../redux/userSlice';
import { useSelector,useDispatch } from 'react-redux';
import logo from "../../assets/logo.jpg"
const NavBar = () => {
    const dispatch=useDispatch()
    const {isAuthenticated,email }=useSelector((state)=>state.user) 


  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem('token')
    dispatch(removeUser())
  };

  return (
    <nav className="flex items-center justify-between p-4  border rounded-[8px] shadow-lg text-white mb-3">
      <div className="flex items-center space-x-4 text-black focus:text-gray-500">
        <Link to="/" className="text-lg  hover:text-gray-600 focus:text-gray-500">
          <img src={logo} 
          alt="logo"
          className='h-9 w-full object-contain' />
        </Link>
        <Link to="/about"
         className="text-lg hover:text-gray-600 focus:text-gray-500">About</Link>
        {isAuthenticated && (<>
          <Link to="/projects" className="text-lg hover:text-gray-600 focus:text-gray-500">My Boards</Link>
        
        </>
        )}
      </div>

      <div className="flex items-center space-x-4 text-black hover:text-gray-600">
        {isAuthenticated ? (
          <button  onClick={logout} className="text-lg hover:text-gray-600 focus:text-gray-500">logout</button>
        ) : (
          <>
            <Link to="/login" className="text-lg hover:text-gray-600 focus:text-gray-500">login</Link>
          
          
            <Link to="/register" className="text-lg hover:text-gray-600 focus:text-gray-500">register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
