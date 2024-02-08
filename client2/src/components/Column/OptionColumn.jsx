import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { updateColName } from '../../redux/allBoardsSlice'
import { fetchupdateColName } from '../../apí/column'

export const OptionColumn = ({setRenameTextAreaIsOpen,setDropDownIsOpen,idColumn,colName}) => {
  const {boardDetail}=useSelector((state)=>state.allBoards)
  const dispatch=useDispatch()
const [colname,setColName]=useState(colName)
    const onClearFuntion=()=>{
        setRenameTextAreaIsOpen(false)
        setDropDownIsOpen(false)
    }
    const handleSubmitRename=async(event)=>{
      event.preventDefault()
try {
  if(!colname){
    onClearFuntion()
    return
  }
  const {data}=await fetchupdateColName(idColumn,{
    columnName:colname
  })
  console.log("🚀 ~ handleSubmitRename ~ data:", data)
  
  dispatch(updateColName({idColumn,columnName:data.columnName}))
  // updateColName
  onClearFuntion()
} catch (error) {
  console.log("🚀 ~ handleSubmitRename ~ error:", error)
  
}
    }
  return (
    <div className='flex-shrink-0  w-full'> 
        <form
          className="
          m-[10px]
          rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    	    onSubmit={(event)=>handleSubmitRename(event)}
        >
          <input
            
            className="w-full  outline-none border-none align-top focus:ring-0 sm:text-sm p-2"
            onChange={(event)=>setColName(event.target.value)}
            value={colname}
            placeholder="Enter a title for this column ... "
          />
      
          <div className="flex items-center justify-start gap-2 my-1 bg-white ">
            <button
              type="button"
              className="rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-600"
              onClick={()=>onClearFuntion()}
            >
              Clear
            </button>
      
            <button
              type="submit"
              className="rounded bg-[#219653] px-3 py-1   text-sm font-medium text-white hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
  )
}
