import React,{useState} from 'react'
import Modal from '../Modal/Modal'
import CreateBoardForm from './CreateBoardForm'

export default function AddProject() {
  const [ModalIsOpen,SetModalIsOpen]=useState(false)
  return (
    <header>
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">All Boards</h2>
  
    
        </div>
  
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
     
          
  
            
  
          <button
            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button" onClick={()=>{SetModalIsOpen(true)}}
          >
          + Add
          </button>
        </div>
      </div>
    </div>
    <Modal isOpen={ModalIsOpen} setIsOpen={SetModalIsOpen} >
      <CreateBoardForm setIsOpen={SetModalIsOpen}  />
    </Modal>
  </header>
  )
}
