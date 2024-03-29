import React,{useEffect,useState} from 'react'
import {useQuill} from "react-quilljs";
import "quill/dist/quill.snow.css"
import toolbar from './toolbar';
import {useSelector,useDispatch} from "react-redux";

import { getCardDetail, updateCardDetail } from '../../apí/cardDetail';

function Editor({setdisplayEditor,CardDetailId,dataText,setDataText}) {
    const dispatch=useDispatch()

    const {CardDetail}=useSelector(state=>state.cardDetail)
 
    
    const onSubmit=async(event)=>{
        event.preventDefault()
        try {
      
        const {data}=await  updateCardDetail(CardDetailId,{content:dataText})
          
        setDataText(data.content)
        setdisplayEditor(false)
      } catch (error) {
        console.log("🚀 ~ onSubmit ~ error:", error)
        
      }
    }


useEffect(() => {
  async function fetchCardDetail() {
    try {
      const {data}=await getCardDetail(CardDetailId)

     if(data.content){
     setDataText(data.content)

      }
    } catch (error) {
      console.log("🚀 ~ fetchCardDetail ~ error:", error)
      
    }
  }
  fetchCardDetail()





}, []);


const clearEditor=()=>{
  setdisplayEditor(false)
  console.log("holaaa");
}
    
  return (
    <div>

    

          <form onSubmit={onSubmit}>
 
<div>
  <label for="OrderNotes" className="sr-only">Order notes</label>

  <div
    className="overflow-hidden rounded-lg border border-gray-200 focus-within:border-blue-600  focus-within:ring-blue-600"
  >
    <textarea
      id="OrderNotes"
      className="w-full resize-none  align-top focus:ring-0 focus:bg-white focus:rounded-none rounded-none hover:rounded-none  focus:border-transparent focus:outline-none sm:text-sm p-3"
      rows="4"
      placeholder="Enter any additional order notes..."
      value={dataText }
      onChange={(event)=>setDataText(event.target.value)}
    ></textarea>

    <div className="flex items-center justify-end gap-2 bg-white p-3">
      <button
    
        className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
      onClick={clearEditor}
      >
        Clear
      </button>

      <button
        type="submit"
        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
  </div>
</div>
        </form>
           
  </div>
  )
}

export default Editor