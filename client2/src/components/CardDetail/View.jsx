import React, { useEffect ,useState} from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux";
import { getCardDetail } from "../../apí/cardDetail";

function View({CardDetailId,setdisplayEditor,dataText,setDataText}) {

  const { CardDetail } = useSelector((state) => state.cardDetail);
 

  useEffect(() => {
    async function fetchCardDetail() {
      try {
        const {data}=await getCardDetail(CardDetailId)

        if(data.content){

      setDataText(data.content)
        }else{
     
          setdisplayEditor(true)
        }
      } catch (error) {
        console.log("🚀 ~ fetchCardDetail ~ error:", error)
        
      }
    }




  fetchCardDetail()

  }, []);

  return (
    <div className="h-[250px] p-2 border-none">
<p>
{
  dataText
}
</p>

    </div>
  );
}

export default View;
