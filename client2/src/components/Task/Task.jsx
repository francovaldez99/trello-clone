import { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";

import { GoPencil } from "react-icons/go";
import Modal from "../Modal/Modal";
import CardDetail from "../CardDetail/CardDetail";

function Task({ taskname, taskIid, index, idColumn ,CardDetailId,listname,coverCard}) {
const [cardDetailIsOpen,SetCardDetailIsOpen]=useState(false)
const truncatedText = taskname.length > 16 ? taskname.slice(0, 16) + '...' : taskname;

  return (
    <Draggable draggableId={`${taskIid}`} index={index} >
      {(provided) => (
        <div
          className={`group  bg-white  m-2 p-1 select-none shadow-cardShadow border-gray-100 h-[${coverCard ? "290px": "148px"}] rounded-[8px] flex flex-col border border-white hover:border-blue-500 hover:border`}
          {...provided.draggableProps}
          
          ref={provided.innerRef}
        >
{
  coverCard &&
  <img
  src={coverCard}
  className="h-[130px] w-full rounded-[8px] object-cover "/>
}

  <h3 
  className="font-semibold  w-[100px]  overflow-ellipsis  text-base  tracking-[-0.56px] flex-shrink row-span-1  py-1 ml-1" {...provided.dragHandleProps} >
    {truncatedText}
  </h3>
  <div className="flex w-full  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer select-none mt-2 ml-2">
   

  <span onClick={()=>SetCardDetailIsOpen(true)} >
<GoPencil/>
</span>

  </div>
        <Modal isOpen={cardDetailIsOpen}>
          <CardDetail SetCardDetailIsOpen={SetCardDetailIsOpen}
           CardId={taskIid}
           taskname={taskname}
            listname={listname}
             cardDetailIsOpen={cardDetailIsOpen}
              CardDetailId={CardDetailId}
              idColumn={idColumn}
              coverCard={coverCard}/>
        </Modal>






        </div>
      )}
    </Draggable>
  );
}

export default Task;
