import React,{useState} from "react";
import Task from "../Task/Task";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import AddCard from "./AddCard";
import { SlOptions } from "react-icons/sl";
import DropdDownColumn from "./DropdDownColumn";
import { OptionColumn } from "./OptionColumn";

function Column({ colName, tasks, idColumn, index }) {
  const sortedTasks = [...tasks].sort((a, b) => a.orderCard - b.orderCard);
const [dropDownIsOpen,setDropDownIsOpen]=useState(false)
const [renameTextAreaIsOpen,setRenameTextAreaIsOpen]=useState(false)
  return (
    <Draggable draggableId={idColumn} index={index}>
      {(provided) => (
        <div
          className="w-[full] shadow-cardShadow m-2 flex-grow-1 flex-shrink-0"
          {...provided.placeholder}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          {
          renameTextAreaIsOpen ? <OptionColumn
           setRenameTextAreaIsOpen={setRenameTextAreaIsOpen}
            setDropDownIsOpen={setDropDownIsOpen}
            idColumn={idColumn}
            colName={colName}
            />: <div className="flex justify-around select-none cursor-pointer" >
          
          <h3 className="text-center text-sm tracking-tight font-medium " {...provided.dragHandleProps}>
            {colName}
          </h3>
          <span className="cursor-pointer select-none" onClick={()=>{ setDropDownIsOpen(!dropDownIsOpen) }} >
           <SlOptions/>       
           <div className="relative">
            <DropdDownColumn
             dropDownIsOpen={dropDownIsOpen}
            setRenameTextAreaIsOpen={setRenameTextAreaIsOpen} 
            idColumn={idColumn}/>
                 </div>
          </span>
      </div>

          }
         
          <Droppable droppableId={idColumn} type="task">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                
                {sortedTasks.map((task,index) => (
                  <Task
                    key={task.id}
                    taskIid={task.id}
                    taskname={task.CardName}
                    index={index}
                    idColumn={idColumn}
                    CardDetailId={task.CardDetailId}
                    listname={colName}
                    coverCard={task.coverCard}
                  />
                ))}
                {provided.placeholder}
            
                  <AddCard idColumn={idColumn}/>
              

              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
