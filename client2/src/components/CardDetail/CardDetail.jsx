import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import Modal from '../Modal/Modal';
import Gallery from '../Gallery/Gallery';

function CardDetail({SetCardDetailIsOpen}) {
    const [galleryIsOpen,SetGalleryIsOpen]=useState(false)
    const [selectedImage,setSelectedImage]=useState("")
  return (
    <div
     className='relative top-0 bottom-0 left-0 right-0 
     min-h-[630px] w-[661px]  bg-white rounded-[8px]  p-[12px] z-[1]'>
        
            <span 
                  onClick={()=>SetCardDetailIsOpen(false)}
                  className="absolute top-0 right-0  rounded-[8px] bg-indigo-600 px-1 py-1 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  >
                    <MdOutlineClose/>
                  </span>
                  <div className='flex flex-col'>
                    
                    <img 
                    src={selectedImage}
                     alt={selectedImage}
                     className={` h-[230px] rounded-[8px]  object-cover object-p`}
                     />
                  <p 
                    className="flex flex-row   items-center justify-start self-end rounded-lg  px-3 py-1 text-m font-medium text-[#828282] bg-[#F2F2F2] w-[149px] transition  focus:outline-none focus:ring  "
                    onClick={()=>SetGalleryIsOpen(true)}>
                    <span>
                        <AiFillPicture />
                    </span>
                    <span>cover</span>
        </p>
        <Modal isOpen={galleryIsOpen}>
          <div className="relative">
            <button
              className="absolute top-0 right-0  rounded-[8px] bg-indigo-600 px-1 py-1 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
              onClick={() => {
                SetGalleryIsOpen(false);
              }}
            >
              <MdOutlineClose />
            </button>
            <Gallery
              onSelect={setSelectedImage}
              selectedImage={selectedImage}
              SetGalleryIsOpen={SetGalleryIsOpen}
            />
          </div>
        </Modal>
                  </div>

                    <div>
                        <h2>title</h2>
                     <span>in list <b>sadfs</b></span>

            <p className=' text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos officia ab sapiente enim, minus officiis nihil recusandae itaque deserunt qui vel sed repudiandae, veniam necessitatibus dolorem iure animi similique obcaecati.
            </p>

        </div>
    </div>
  )
}

export default CardDetail