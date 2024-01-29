import { Draggable } from "@hello-pangea/dnd";
import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import Modal from "../Modal/Modal";
import CardDetail from "../CardDetail/CardDetail";

function Task({ taskname, taskIid, index, idColumn }) {
const [cardDetailIsOpen,SetCardDetailIsOpen]=useState(false)

  return (
    <Draggable draggableId={`${taskIid}`} index={index} >
      {(provided) => (
        <div
          className="group  bg-white  m-2 p-1 select-none shadow-cardShadow border-gray-100 h-[148px] rounded-3xl flex flex-col  hover:border-blue-500 hover:border"
          {...provided.draggableProps}
          
          ref={provided.innerRef}
        >


  <h3 
  className="font-semibold  w-[100px]  overflow-ellipsis  text-base  tracking-[-0.56px] flex-shrink row-span-1  py-1 ml-1" {...provided.dragHandleProps} >
    {taskname}
  </h3>
  <div className="flex w-full  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer select-none mt-2 ml-2">
   

  <span onClick={()=>SetCardDetailIsOpen(true)} >
<GoPencil/>
</span>

  </div>
        <Modal isOpen={cardDetailIsOpen}>
          <CardDetail SetCardDetailIsOpen={SetCardDetailIsOpen}/>
        </Modal>






        </div>
      )}
    </Draggable>
  );
}

export default Task;
