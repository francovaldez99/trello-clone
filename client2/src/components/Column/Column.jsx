import React from "react";
import Task from "../Task/Task";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import AddCard from "./AddCard";
import { SlOptions } from "react-icons/sl";

function Column({ colName, tasks, idColumn, index }) {
  const sortedTasks = [...tasks].sort((a, b) => a.orderCard - b.orderCard);

  return (
    <Draggable draggableId={idColumn} index={index}>
      {(provided) => (
        <div
          className="w-[full] shadow-cardShadow m-2 flex-grow-1 flex-shrink-0"
          {...provided.placeholder}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="flex justify-around select-none cursor-pointer" >
          
          
            <h3 className="text-center text-sm tracking-tight font-medium " {...provided.dragHandleProps}>
              {colName}
            </h3>
            <span className="cursor-pointer select-none">
            <SlOptions/>            </span>
        </div>
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
