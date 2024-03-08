import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { createBoard } from "../../apí/Board";
import { useDispatch } from "react-redux";
import { setAllBoards } from "../../redux/allBoardsSlice";
import { TbLock } from "react-icons/tb";

import { AiFillPicture } from "react-icons/ai";
import Modal from "../Modal/Modal";
import Gallery from "../Gallery/Gallery";

function CreateBoardForm({ setIsOpen }) {
  const dispatch = useDispatch();
  const [galleryIsOpen,SetGalleryIsOpen]=useState(false)
  const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1682685797208-c741d58c2eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQwODN8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTYzMjk5OXw&ixlib=rb-4.0.3&q=80&w=400");
  const [formCreateBoard, setFormCreateBoard] = useState({
    boardName: "",
    cover:selectedImage
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formCreateBoard.boardName) {
      return;
    }
    createBoard({...formCreateBoard,cover:selectedImage})
      .then((res) => {
        dispatch(setAllBoards(res.data));
        setFormCreateBoard({
          boardName: "",

        });
        setIsOpen(false);
      })
      .catch((err) => {
        console.log("🚀 ~ handleChange ~ err:", err);
        setIsOpen(false);
      });
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormCreateBoard({
        ...formCreateBoard,
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={(event) => onSubmitHandler(event)}
      className="w-[307px] h-[271px] border rounded-[8px] shadow-[0px 2px 4px 0px rgba(0, 0, 0, 0.05)] bg-white flex flex-col justify-evenly "
    >
      <div className="h-[128px] w-[259px] bg-red-500 rounded-[8px] mx-auto relative ">
        <img 
            src={selectedImage }
            alt={selectedImage}
            className="h-full w-full object-cover object-center rounded-[8px]"
        />
      </div>
      <input
        type="text"
        name="boardName"
        value={formCreateBoard.boardName}
        onChange={(event) => handleChange(event)}
        className="mx-auto border focus:outline-none rounded-[8px] shadow-lg w-[259px] h-[34px] text-sm border-[1px solid #E0E0E0] px-1 py-2"
        placeholder="Add board title"
      />

      <div className="flex  justify-evenly">
        <p 
        className="flex flex-row  items-center rounded-lg  px-3 py-1 text-sm font-medium text-[#828282] transition  focus:outline-none focus:ring ml-[23px] cursor-pointer select-none hover:text-gray-600 focus:text-gray-500"
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
        <button className="flex flex-row  items-center rounded-lg  px-3 py-1 text-sm font-medium text-[#828282] transition  focus:outline-none focus:ring ml-[23px]  cursor-pointer select-none " disabled>
          <span>
            <TbLock />
          </span>
          <span>private</span>
        </button>
      </div>
      <div className=" self-end mr-[23px]">
        <button
          className=" rounded-lg  px-3 py-1 text-sm font-medium text-[#828282] transition  focus:outline-none focus:ring" type="button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          cancel
        </button>
        <button className=" rounded-lg bg-indigo-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="submit">
          add +
        </button>
      </div>
    </form>
  );
}

export default CreateBoardForm;
