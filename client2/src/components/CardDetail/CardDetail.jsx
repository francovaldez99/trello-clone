import React, { useState,useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import Modal from "../Modal/Modal";
import Gallery from "../Gallery/Gallery";
import Editor from "./Editor";
import { GoPencil } from "react-icons/go";
import View from "./View";
import { fetchdeleteCard, updateCoverCard } from "../../apí/card";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, newCoverCard } from "../../redux/allBoardsSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import RenameCard from "./RenameCard";
import { SlOptions } from "react-icons/sl";
import DropDownDeleteCover from "./DropDownDeleteCover"


function CardDetail({ SetCardDetailIsOpen ,taskname,cardDetailIsOpen,CardDetailId,listname,CardId,idColumn,coverCard}) {
  const dispatch=useDispatch()
  const {boardDetail}=useSelector((state)=>state.allBoards)

  const [galleryIsOpen, SetGalleryIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [displayEditor, setdisplayEditor] = useState(false);
  const [renameCardIsOpen,setRenameCardIsOpen]=useState(false);
  const [DropDownDeleteCoverIsOpen,SetDropDownDeleteCoverIsOpen]=useState(false)
  useEffect(()=>{
const updatecoverCard=async()=>{
  try {
    console.log(CardId);


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
    
      updatecoverCard()
    
  },[selectedImage])

  useEffect(() => {
    const getCoverImage = ()=>{
      console.log(boardDetail.Columns);
      console.log(idColumn);

      let indexCol = boardDetail.Columns.findIndex((col)=>col.id===idColumn)
      console.log("🚀 ~ getCoverImage ~ indexCol:", indexCol)

      
      let indexCard =boardDetail.Columns[indexCol].Cards.findIndex((card)=>card.id===CardId)
      if(indexCard===-1){
        return 
      }
      let updateCoverImage=boardDetail.Columns[indexCol].Cards[indexCard].coverCard 
    
      if(updateCoverImage!=""){

        setSelectedImage(updateCoverImage)
      }
    }
    
    if(boardDetail){
      getCoverImage()
    }

  }, [boardDetail])
  const handleDeleteCard=async()=>{
    try {
      
      const {data}= await fetchdeleteCard(CardId)
      dispatch(deleteCard({idColumn,CardId:data.CardId}))
      SetCardDetailIsOpen(false)

    } catch (error) {
      console.log("🚀 ~ handleDeleteCard ~ error:", error)
      
    }
  }

  if(cardDetailIsOpen){
    return (
        <div
          className="relative top-0 bottom-0 left-0 right-0 
         h-[630px]  w-[661px]  bg-white rounded-[8px]  p-[12px] z-[2] overflow-y-auto flex flex-col justify-between"
        >
          <span
            onClick={() => SetCardDetailIsOpen(false)}
            className="absolute top-0 right-0 z-[1]  rounded-[8px] bg-indigo-600 px-1 py-1 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <MdOutlineClose />
          </span>
          <div className="flex flex-col relative">
           
               <div className="w-full ">
               <img
                src={coverCard }
                
                className={` max-h-[230px] w-full rounded-[8px]  object-cover`}
                />
                <div className="absolute top-0 left-[5px] " 
                onDoubleClick={()=>SetDropDownDeleteCoverIsOpen(false)}
                onClick={()=>SetDropDownDeleteCoverIsOpen(!DropDownDeleteCoverIsOpen)}>
                  <button className="hover:scale-[1.29] transition-transform"><SlOptions/></button>
                  <DropDownDeleteCover 
                  setSelectedImage={setSelectedImage}
                  DropDownDeleteCoverIsOpen={DropDownDeleteCoverIsOpen}
                  />
                  </div>
             </div>
              
              
            
            <div className="mb-[12px] relative  justify-self-start">
              <h2 className="flex justify-start items-start m-[10px]">
                {
                  renameCardIsOpen ?
                  (<RenameCard 
                    taskname={taskname}
                    CardId={CardId}
                    idColumn={idColumn}
                    setRenameCardIsOpen={setRenameCardIsOpen}/>):
                   ( 
                     <>
                       <span className="mx-2 m-2">{taskname}</span>
                                     
                                         <span
                                         onClick={()=>setRenameCardIsOpen(true)}
                                          className="mx-2 rounded-full bg-gray-200 mt-1 p-2 hover:bg-gray-300 "><GoPencil/></span>
                     </>)
                }
           
              </h2>
              <span className="text-xs font-bold text-gray-600 ">in List </span>
               <strong className="text-xs">{listname}</strong>
              
            </div>
            <div className="flex justify-evenly mt-3">
                
    
              <p className="flex flex-row items-center justify-start self-end rounded-lg px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 w-[149px] transition focus:outline-none focus:ring cursor-pointer hover:bg-gray-300"
              onClick={()=>setdisplayEditor(true)}>
                <span className="mr-2">
                  <GoPencil />
                </span>
                <span>Description</span>
              </p>
              <p
                className="flex flex-row items-center justify-start self-end rounded-lg px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 w-[149px] transition focus:outline-none focus:ring cursor-pointer hover:bg-gray-300"
                onClick={() => SetGalleryIsOpen(true)}
              >
                <span className="mr-2">
                  <AiFillPicture />
                </span>
                <span>Cover</span>
              </p>

              <button className="flex flex-row items-center content-center justify-start self-end rounded-lg px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 w-[149px] transition focus:outline-none focus:ring cursor-pointer hover:bg-gray-300"
              onClick={handleDeleteCard}>
                <span
                  
                className='mr-1 font-bold py-1'
                
                ><RiDeleteBin6Line/></span>
                <span className="font-bold">delete card</span>
            </button>
            </div>
    
          </div>
          <div className="h-[300px]">
            {/* {
                displayEditor ? (<Editor
                   setdisplayEditor={setdisplayEditor}
                   CardDetailId={CardDetailId}/>
                
                ):(<View CardDetailId={CardDetailId} setdisplayEditor={setdisplayEditor}/>)
            } */}
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
