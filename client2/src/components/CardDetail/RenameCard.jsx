import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";

const RenameCard = ({taskname,setRenameCardIsOpen}) => {
  const [taskName,setTaskName]=useState(taskname);
  const dispatch=useDispatch();
  const {boardDetail}=useSelector((state)=>state.allBoards);
    return (
    <div className='  w-[full]'>     
      
    <form
      className="
      rounded-lg  shadow-sm
      flex flex-row
      "
 
    >
      <input
        id="OrderNotes"
        className="w-full resize-none outline-none border-none align-top focus:ring-0 sm:text-sm p-2 "

        autoFocus
        value={taskName}
        onChange={(event)=>setTaskName(event.target.value)}
        placeholder="Enter a title for this card..."
      />
  
      <div className="flex items-center justify-start gap-2 bg-white ">
        <button
          type="button"
          className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
            onClick={()=>setRenameCardIsOpen(false)} 
        >
          Clear
        </button>
  
        <button
          type="submit"
          className="rounded bg-[#219653] px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
        >
          Save
        </button>
      </div>
    </form>
  </div>
  )
}

export default RenameCard