import React, { useEffect, useState } from "react";
import { register } from "../../apí/user";
import {useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import logo from "../../assets/logo.jpg"
import {setShowToast,setToastMessage,setToastType} from "../../redux/userSlice"

function RegisterForm() {
  const {isAuthenticated}=useSelector((state)=>state.user)
  const dispatch = useDispatch();

  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
   if(Object.values(formRegister).every((el)=>!!el)){
    if(formRegister.password === formRegister.password_confirmation){
      register(formRegister)
      .then((res)=>{
        console.log(res);
         ///
         dispatch(setShowToast(true))
         dispatch(setToastMessage(res.data.message))
        dispatch(setToastType(""))
      
         ///
        navigate("/login")
      })
      .catch((err) => {

         ///
         dispatch(setShowToast(true))
         dispatch(setToastMessage(err.response.data.message))
        dispatch(setToastType(""))
      
         ///
      
        
     
      })
    }
   }
  };
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    password_confirmation:"",
    firstname: "",
    lastname: "",
  });

const HandleChange=(event)=>{
const {name,value}=event.target


setFormRegister({
  ...formRegister,
  [name]:value
})


}

useEffect(() => {

  
  if(isAuthenticated){
    navigate("/projects")
  }
  }, [isAuthenticated])

  return (
    
      
    

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
       
            <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl flex ">
            <span>Welcome to </span>
            </h2>
             <img
            src={logo}
            alt="logo"
            className="h-20 inline-block"/>

    
            <form onSubmit={(event)=>handleSubmit(event)} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="firstname"
                  className="mt-1 w-full rounded-md border border-gray-700 bg-white text-sm text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
   
                  value={formRegister.firstname}
                  onChange={(event)=>HandleChange(event)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="lastname"
                  className="mt-1 w-full rounded-md border border-gray-700 bg-white text-sm text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                  value={formRegister.lastname}
                  onChange={(event)=>HandleChange(event)}

                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-gray-700 bg-white text-sm text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                  value={formRegister.email}
                  onChange={(event)=>HandleChange(event)}

                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border border-gray-700 bg-white text-sm text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                  value={formRegister.password}
                  onChange={(event)=>HandleChange(event)}

                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className={`  ${formRegister.password_confirmation!="" && formRegister.password!==formRegister.password_confirmation?"bg-red-300":"border-gray-200" } mt-1 w-full rounded-md border border-gray-700 bg-white text-sm text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none`}
                  value={formRegister.password_confirmation}
                  onChange={(event)=>HandleChange(event)}
                  
                  />
              </div>
              

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                 className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
        
                  <p href="#" className="text-gray-700 underline cursor-pointer select-none" onClick={()=>navigate("/login")}>
                    Log in
                  </p>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
     
    
  );
}

export default RegisterForm;
