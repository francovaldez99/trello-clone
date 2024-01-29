import React, { useEffect, useState } from "react";
import { login } from "../../apí/user";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { ChangeAuth,addUser } from "../../redux/userSlice";
function LoginForm() {
  const {isAuthenticated}=useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tu lógica de inicio de sesión aquí utilizando la API
    login(formLogin)
      .then((res) => {
        console.log("🚀 ~ file: LoginForm.jsx:18 ~ .then ~ res:", res)
        
      
        dispatch(ChangeAuth(true))
        dispatch(addUser(res.data))
        alert(res.data.message);

        navigate("/board");
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.message);
        dispatch(ChangeAuth(false))

      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };
  useEffect(() => {
  
   
    if(isAuthenticated){
      navigate("/projects")
    }
    }, [isAuthenticated])

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        {/* ... (mismo encabezado que el formulario de registro) ... */}
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome back to Squid 🦑
        </h1>

        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
          {/* Email */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={formLogin.email}
              onChange={handleChange}
            />
          </div>

          {/* Contraseña */}
          <div className="col-span-6">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={formLogin.password}
              onChange={handleChange}
            />
          </div>

          {/* Botón de inicio de sesión */}
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              Log in
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Don't have an account?
              <span
                className="text-gray-700 underline cursor-pointer select-none"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LoginForm;
