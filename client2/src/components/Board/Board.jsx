import React, { useEffect } from 'react'
import { DragDropContext ,Droppable} from '@hello-pangea/dnd';

import Column from '../Column/Column';
import { useParams } from 'react-router-dom';
import { getBoardbyId, updateBoard } from '../../apí/Board';
import { useSelector,useDispatch } from 'react-redux';
import { setBoardDetail, updateBoardOrder } from '../../redux/allBoardsSlice';
import AddColumn from '../addColumn/AddColumn';



function Board() {
    const {id}=useParams()

    const {boardDetail}=useSelector((state)=>state.allBoards)
    const dispatch = useDispatch()
useEffect(() => {
const getBoardDetail=async()=>{
    try {
        const {data}=await getBoardbyId(id)
          const Columns=data.Columns.sort((a, b) => a.orderColumn - b.orderColumn).map((el)=>{
            return {
              ...el,
              Cards:el.Cards.sort((a, b) => a.orderCard - b.orderCard)

            }
          })
        dispatch(setBoardDetail({
          ...data,
          Columns
        }))

    } catch (error) {
        console.log("🚀 ~ file: Board.jsx:18 ~ getBoardDetail ~ error:", error)
        
    }
   
  }
  if(!boardDetail.id){


    getBoardDetail()
  }
    

  return ()=>{
    dispatch(setBoardDetail({}))
  }

}, [])

useEffect(() => {
const updateOrderInServer=async()=>{
  try {
    let dataTosend={...boardDetail}

    dataTosend.Columns=dataTosend.Columns.map((el)=>{
        return {
            id:el.id,
            columnName:el.columnName,
            orderColumn:el.orderColumn,
            BoardId:el.BoardId,
            Cards:el.Cards.map((el)=>{
              return {
                 id: el.id,
                  CardName: el.CardName,
                        orderCard: el.orderCard,
                        ColumnId:el.ColumnId,
              }
            }),
        }
    })
     await  updateBoard(id,{data:dataTosend})
  } catch (error) {
    console.log("🚀 ~ updateOrderInServer ~ error:", error)
    
  }
}
if(boardDetail.id){

  updateOrderInServer()
}



}, [boardDetail])


const onDragEnd = (result) => {
    
  
    dispatch(updateBoardOrder(result))

    

  };
  
  return (
    <div className="overflow-x-auto min-h-[600px] bg-[#F8F9FD]">
    <DragDropContext onDragEnd={onDragEnd} >
        <Droppable direction='horizontal' droppableId='Columns' type='column'  >
            {
                (provided) => (
                    <div  
                    className='flex '
                     {...provided.droppableProps}
                      ref={provided.innerRef}>
                       
                       {boardDetail?.Columns?.length ? <>
                       
                        {
                         
                      
                           
                         [...boardDetail.Columns].sort((a, b) => a.orderColumn - b.orderColumn)?.
                         map((el , index)=>(
                             <Column
                                     key={el.id} 
                                    colName={el.columnName} 
                                    tasks={el.Cards } 
                                    index={index}
                                     idColumn={el.id} />
                                     
                                     ))
                      }
                      {provided.placeholder}
                       </> : 
                       <>
                       </>}
                      
                        <AddColumn/>
                    </div>
                )
            }

        </Droppable>


    </DragDropContext>
    </div>
  )
}

export default Board