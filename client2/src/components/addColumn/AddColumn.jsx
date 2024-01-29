import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { setBoardDetail ,newColBoard} from '../../redux/allBoardsSlice';
import { createColumn } from '../../apí/column';


function AddColumn() {
  const { boardDetail } = useSelector((state) => state.allBoards);
  const dispatch=useDispatch()
  const [isClicked, setIsClicked] = useState(false);
const [columnName,SetColumnName]=useState("")
  const onSubmitcreateColumn = (event) => {
   event.preventDefault()
          createColumn(boardDetail.id,{columnName,orderColumn:boardDetail.Columns.length})
        .then((res)=>{

            dispatch(newColBoard(res.data))
            setIsClicked(false)
            SetColumnName("")
        })
        .catch((err)=>{
            console.log(err);
        })

  };

  return (
    <>
      {isClicked ? (
         <div className='flex-shrink-0 w-[269px]  '>
         
       
         <form
           className="  m-[10px]
           rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  "
            onSubmit={(event)=>onSubmitcreateColumn(event)}
         >
           <textarea
             id="OrderNotes"
             className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm  outline-none p-2"
             rows="2"
             placeholder="add column name..."
             value={columnName}
             onChange={(event)=>SetColumnName(event.target.value)}
           ></textarea>
       
           <div className="flex items-center justify-start gap-2 bg-white p-3">
             <button
               type="button"
               className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
               onClick={()=>{setIsClicked(false);SetColumnName("")}}
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
      ) : (
        <div className='flex items-start m-2 w-[244px] shrink-0'>
          <span className='shrink-0 border border-[#DAE4FD] bg-[#DAE4FD] rounded-[8px] px-6 py-1 text-sm font-medium text-blue-500 transition hover:bg-transparent focus:outline-none focus:ring flex items-center justify-evenly w-full cursor-pointer select-none'           
             onClick={()=>setIsClicked(true)}>
            <span className='shrink-0'>Add another list</span>
            <span className='shrink-0'>
              <IoMdAdd />
            </span>
          </span>
        </div>
      )}
    </>
  );
}

export default AddColumn;
