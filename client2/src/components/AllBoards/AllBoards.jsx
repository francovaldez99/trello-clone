import React,{useState,useEffect} from 'react'
import CardProject from './CardProject';
import { getAllBoard } from '../../apí/Board';
import {useDispatch , useSelector} from "react-redux"
import { setAllBoards } from '../../redux/allBoardsSlice';
function AllBoards() {
const {allBoards}=useSelector((state)=>state.allBoards)

const dispatch=useDispatch()
useEffect(() => {
  async function getBoards() {
    try {
      const {data}=await getAllBoard()
      dispatch(setAllBoards(data))
      // setAllBoard(data)
    } catch (error) {
      if(localStorage.getItem("token")){
        window.location.reload();
      }
      console.log("🚀 ~ file: AllBoards.jsx:14 ~ getBoards ~ error:", error)
      
    }
  }


  getBoards()

}, [])

  return (
    <>
      {
        allBoards.length ? <div className='mt-5 grid grid-cols-2 md:grid-cols-4'> {
          allBoards.map((board,index)=>(
            <CardProject
            boardName={board.boardName}
            id={board.id}
             key={index}
             cover={board.cover}/>
          ))
        }</div>:
        
        <div>
          
       </div>
      }
    </>
  )
}

export default AllBoards