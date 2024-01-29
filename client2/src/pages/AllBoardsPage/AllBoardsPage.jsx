import React from 'react'
import AllBoards from '../../components/AllBoards/AllBoards'
import AddProject from '../../components/AllBoards/AddBoard'
import SpinLoading from '../../components/SpinLoading/SpinLoading'

function AllBoardsPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <AddProject/>
  
        <AllBoards/>

    </div>
  )
}

export default AllBoardsPage