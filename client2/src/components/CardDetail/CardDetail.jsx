import React, { useState,useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import Modal from "../Modal/Modal";
import Gallery from "../Gallery/Gallery";
import Editor from "./Editor";
import { GoPencil } from "react-icons/go";
import View from "./View";
import { updateCoverCard } from "../../apí/card";
import { useDispatch, useSelector } from "react-redux";
import { newCoverCard } from "../../redux/allBoardsSlice";

function CardDetail({ SetCardDetailIsOpen ,taskname,cardDetailIsOpen,CardDetailId,listname,CardId,idColumn,coverCard}) {
  const dispatch=useDispatch()
  const {boardDetail}=useSelector((state)=>state.allBoards)

  const [galleryIsOpen, SetGalleryIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [displayEditor, setdisplayEditor] = useState(false);
  useEffect(()=>{
const updatecoverCard=async()=>{
  try {
    const {data}=await updateCoverCard(CardId,{
      coverCard:selectedImage
    })
    dispatch(newCoverCard({
      idColumn,
      idCard:CardId,
      coverCard:data.coverCard
    }))




    
  } catch (error) {
    console.log("🚀 ~ updatecoverCard ~ error:", error)
    
  }
}
    if(selectedImage){
      updatecoverCard()
    }
  },[selectedImage])


  useEffect(() => {
    const getCoverImage = ()=>{
      let indexCol = boardDetail.Columns.findIndex((col)=>col.id===idColumn)

      
      let indexCard =boardDetail.Columns[indexCol].Cards.findIndex((card)=>card.id===CardId)

      let updateCoverImage=boardDetail.Columns[indexCol].Cards[indexCard].coverCard 
    
      if(updateCoverImage!=""){

        setSelectedImage(updateCoverImage)
      }
    }
    
    if(boardDetail){
      getCoverImage()
    }

  }, [boardDetail])
  

  if(cardDetailIsOpen){
    return (
        <div
          className="relative top-0 bottom-0 left-0 right-0 
         h-[630px]  w-[661px]  bg-white rounded-[8px]  p-[12px] z-[1] overflow-y-auto flex flex-col justify-evenly"
        >
          <span
            onClick={() => SetCardDetailIsOpen(false)}
            className="absolute top-0 right-0  rounded-[8px] bg-indigo-600 px-1 py-1 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <MdOutlineClose />
          </span>
          <div className="flex flex-col ">
           {
             coverCard || selectedImage ? (<img
              src={coverCard || selectedImage}
              alt={selectedImage}
              className={` h-[230px] rounded-[8px]  object-cover object-p`}
              />):(<div className="h-"></div>)
            }
            <div className="mb-[12px]">
              <h2 className="">{taskname}</h2>
              <span>in List <strong>{listname}</strong></span>
              
            </div>
            <div className="flex justify-evenly mt-3">
                
    
              <p className="flex flex-row items-center justify-start self-end rounded-lg px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 w-[149px] transition focus:outline-none focus:ring"
              onClick={()=>setdisplayEditor(true)}>
                <span className="mr-2">
                  <GoPencil />
                </span>
                <span>Description</span>
              </p>
              <p
                className="flex flex-row items-center justify-start self-end rounded-lg px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 w-[149px] transition focus:outline-none focus:ring cursor-pointer"
                onClick={() => SetGalleryIsOpen(true)}
              >
                <span className="mr-2">
                  <AiFillPicture />
                </span>
                <span>Cover</span>
              </p>
            </div>
    
          </div>
          <div className="h-[300px]">
            {
                displayEditor ? (<Editor setdisplayEditor={setdisplayEditor} CardDetailId={CardDetailId}/>
                
                ):(<View CardDetailId={CardDetailId} setdisplayEditor={setdisplayEditor}/>)
            }
          </div>

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
                  selectedImage={coverCard}
                  SetGalleryIsOpen={SetGalleryIsOpen}
                />
              </div>
            </Modal>
        </div>
      )
  }else {
    return null
  }
  
}

export default CardDetail;
