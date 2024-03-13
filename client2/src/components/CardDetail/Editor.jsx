import React,{useEffect} from 'react'
import {useQuill} from "react-quilljs";
import "quill/dist/quill.snow.css"
import toolbar from './toolbar';
import {useSelector,useDispatch} from "react-redux";

import { getCardDetail, updateCardDetail } from '../../apí/cardDetail';
function Editor({setdisplayEditor,CardDetailId}) {
    const dispatch=useDispatch()
    const {CardDetail}=useSelector(state=>state.cardDetail)
    const {quill,quillRef}=useQuill({
        modules:{
            toolbar:toolbar
        }
    })
    
    const onSubmit=async(event)=>{
        event.preventDefault()
        try {
        const result=JSON.stringify(quill.getContents())
        const {data}=await  updateCardDetail(CardDetailId,{content:result})
quill.setContents(JSON.parse(data.content))
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

        quill.setContents(JSON.parse(data.content));
      }else{
        quill.setText('Hello\nWorld!\n');
        setdisplayEditor(true)
      }
    } catch (error) {
      console.log("🚀 ~ fetchCardDetail ~ error:", error)
      
    }
  }


if(quill){

fetchCardDetail()
}
}, [quill]);



    
  return (
    <div>

    

          <form onSubmit={onSubmit}>
       
            <div className='h-[150px] p-2 '>
                <div ref={quillRef} ></div>
            </div>
            <div className="flex items-center justify-start gap-2  relative top-[100px] ">
            <span
              type="submit"
              className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600 cursor-pointer select-none "
          onClick={()=>{        setdisplayEditor(false)}}
            >
              Clear
            </span>
      
            <button
              type="submit"
              className="rounded bg-[#219653] px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700 cursor-pointer select-none"
   
            >
              Save
            </button>
          </div>
        </form>
           
  </div>
  )
}

export default Editor