import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { newCard } from '../../redux/allBoardsSlice';
import { createNewCard } from '../../apí/card';


function AddCard({idColumn}) {
  const dispatch=useDispatch()
  const { boardDetail } = useSelector((state) => state.allBoards);
  const [isClicked, setIsClicked] = useState(false);
const [CardName,setCardName]=useState("")
  const onSubmit = (event) => {
    event.preventDefault();
    createNewCard(idColumn,{
      CardName,
      orderCard:boardDetail.Columns.find((col)=>col.id===idColumn).Cards.length

    })
    .then((res)=>{
      dispatch(newCard({idColumn,Card:res.data}))
      setCardName("")
      setIsClicked(false)
    })
    .catch((err) => {
      console.log("🚀 ~ onSubmit ~ err:", err)
      
    })
  };
  

  return (
    <>
      {isClicked ? (
     
      <div className='flex-shrink-0  w-[238px]'>
       
      
        <form
          className="overflow-hidden 
          m-[10px]
          rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        onSubmit={(event)=>onSubmit(event)}
        >
          <textarea
            id="OrderNotes"
            className="w-full resize-none outline-none border-none align-top focus:ring-0 sm:text-sm p-2"
            rows="2"
            value={CardName}
            onChange={(event)=>setCardName(event.target.value)}
            placeholder="Enter a title for this card..."
          ></textarea>
      
          <div className="flex items-center justify-start gap-2 bg-white p-3">
            <button
              type="button"
              className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
              onClick={()=>setIsClicked(false)}
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
        <div className='flex items-start m-2 '>
          <span className='shrink-0 border border-[#DAE4FD] bg-[#DAE4FD] rounded-[8px] px-6 py-1 text-sm font-medium text-blue-500 transition hover:bg-transparent focus:outline-none focus:ring flex items-center justify-evenly w-full cursor-pointer select-none'              onClick={()=>setIsClicked(true)}>
            <span className='shrink-0'>Add another card</span>
            <span className='shrink-0'>
              <IoMdAdd />
            </span>
          </span>
        </div>
      )}
    </>
  );
}

export default AddCard;
