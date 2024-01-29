import React from 'react'
import { CgSpinner } from "react-icons/cg";

function SpinLoading({isLoading}) {
  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)]  ${isLoading ? "" : "hidden"} h-screen flex justify-center items-center `}>
 <div className="animate-spin     text-blue-500 ">
    <span className=' h-12 w-12 text-[90px]'><CgSpinner/></span>
 </div>
    </div>
  )
}

export default SpinLoading