import React from "react";

function Modal({ isOpen, setIsOpen, children }) {
  return (
    
    <div className={`fixed bg-[rgba(0,0,0,0.6)] top-0 bottom-0 left-0 right-0 ${isOpen ? "" : "hidden"} `}>
      <div className="relative flex items-center justify-center content-center flex-row h-screen">
        {children} 
      </div>
    </div>
  );
}

export default Modal;
