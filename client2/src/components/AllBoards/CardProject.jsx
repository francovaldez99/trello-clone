import React from 'react'
import {Link} from "react-router-dom"
function CardProject({boardName ,id,cover}) {


  return (
    <div className='w-[230px] flex flex-col py-5 px-3 border content-center '>
      <img
    src={cover}
alt={boardName}
      className='w-full h-[130px] object-cover'
      />
      <Link className='font-bold ' to={`/board/${id}`}>{boardName}</Link>
    </div>
  )
}

export default CardProject