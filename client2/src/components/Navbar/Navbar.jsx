import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { removeUser } from '../../redux/userSlice';
import { useSelector,useDispatch } from 'react-redux';
const NavBar = () => {
    const dispatch=useDispatch()
    const {isAuthenticated,email }=useSelector((state)=>state.user) 

  // Puedes personalizar la lógica según tus necesidades (por ejemplo, mostrar diferentes enlaces según el estado de autenticación)
  const logout = () => {
    Cookies.remove("token");
    dispatch(removeUser())
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-lg font-bold">Inicio</Link>
        <Link to="/about" className="text-lg">Acerca de</Link>
        {isAuthenticated && (<>
          <Link to="/projects" className="text-lg">Tablero</Link>
          <Link to="/" className="text-lg" >{email}</Link>
        </>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <button  onClick={logout} className="text-lg">Cerrar Sesión</button>
        ) : (
          <>
            <Link to="/login" className="text-lg">Iniciar Sesión</Link>
            <Link to="/register" className="text-lg">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
