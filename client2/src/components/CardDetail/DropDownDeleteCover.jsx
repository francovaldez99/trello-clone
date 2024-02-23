import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

 const DropDownDeleteCover = ({DropDownDeleteCoverIsOpen,setSelectedImage }) => {
 
 const onDeleteCover = ()=>{
    
    setSelectedImage("")
  
 }
 
    if(DropDownDeleteCoverIsOpen){

        return (
        <div className='w-[120px] h-[60px] absolute cursor-pointer select-none bg-white flex flex-col  justify-evenly  p2 rounded-[8px]  left-[8px] z-[1] hover:bg-gray-50 ' >
      
          
            <span 
                onClick={onDeleteCover}
                className='flex items-center content-center text-red-500  rounded-[8px] mx-auto'>
                <span className=''><RiDeleteBin6Line/></span>
                <span>delete</span>
            </span>
        </div>
      )
    }else{
        
        return null}


}

export default DropDownDeleteCover