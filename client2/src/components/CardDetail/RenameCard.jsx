import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { updateCardName } from '../../redux/allBoardsSlice';
import { fetchUpdateCardName } from '../../apí/card';

const RenameCard = ({taskname,setRenameCardIsOpen,CardId,idColumn}) => {
  const [taskName,setTaskName]=useState(taskname);
  const dispatch=useDispatch();
  const handleRenameCardSubmit=async(event)=>{
    event.preventDefault()
try {

    if(!taskName){
    setRenameCardIsOpen(false)
    return
    }
    const {data}= await fetchUpdateCardName(CardId,{CardName:taskName})
    
    dispatch(updateCardName({CardId,idColumn,CardName:data.CardName}))

    setRenameCardIsOpen(false)
} catch (error) {
    console.log("🚀 ~ handleRenameCardSubmit ~ error:", error)
    
}
  }
    return (
    <div className='  w-[full]'>     
      
    <form
      className="
      rounded-lg  shadow-sm
      flex flex-row
      "
    onSubmit={(event)=>handleRenameCardSubmit(event)}
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