import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector ,useDispatch} from 'react-redux'
import { deleteColumnAction } from '../../redux/allBoardsSlice';
import { fetchDeleteCol } from '../../apí/column';

function DropdDownColumn({dropDownIsOpen,setRenameTextAreaIsOpen,idColumn}) {
    const dispatch=useDispatch()
    const handleDeleteColumn =async ()=>{
try {
    
    const {data}=await fetchDeleteCol(idColumn)
    dispatch(deleteColumnAction({idColumn:data.idColumn}))
} catch (error) {
    console.log("🚀 ~ handleDeleteColumn ~ error:", error)
    
}
    }
    if(dropDownIsOpen){

        return (
        <div className='w-[200px] h-[100px] absolute cursor-pointer select-none bg-white flex flex-col  justify-evenly  p-2 rounded-[8px]  left-[8px] z-[1] ' >
            <button 
            className='hover:bg-[#b6dbe7] rounded-[8px] '
            onClick={()=>{setRenameTextAreaIsOpen(true)}}>rename</button>
            <hr />
            <span 
                onClick={()=>handleDeleteColumn()}
                className='flex items-center content-center text-red-500 hover:bg-[#b6dbe7] rounded-[8px] '>
                <span className=''><RiDeleteBin6Line/></span>
                <span>delete</span>
            </span>
        </div>
      )
    }else{
        
        return null}
}

export default DropdDownColumn