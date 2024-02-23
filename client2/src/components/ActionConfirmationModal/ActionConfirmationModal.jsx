import React from 'react'
import Modal from "../Modal/Modal"
export const ActionConfirmationModal = ({ActionConfirmationModalIsOpen,SetActionIsConfirm}) => {
  return (
    

        <Modal 
        
        isOpen={ActionConfirmationModalIsOpen}>


<div className='  w-[200px]'>     
      
      <form
        className="
        rounded-lg  shadow-sm
        flex flex-row
        "

      >
        <input
          id="OrderNotes"
          className="w-full resize-none outline-none border-none align-top focus:ring-0 sm:text-sm p-2 "
          autoFocus
  
  
          placeholder="Enter a title for this card..."
        />
    
        <div className="flex items-center justify-start gap-2 bg-white ">
          <button
            type="button"
            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
       
          >
            Cancel
          </button>
    
          <button
            type="submit"
            className="rounded bg-[#219653] px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
          >
            Acept
          </button>
        </div>
      </form>
    </div>

        </Modal>
    
  )
}
