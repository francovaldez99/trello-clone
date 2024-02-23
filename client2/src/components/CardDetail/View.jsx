import React, { useEffect ,useState} from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux";
import { getCardDetail } from "../../apí/cardDetail";

function View({CardDetailId,setdisplayEditor}) {
  
  const { CardDetail } = useSelector((state) => state.cardDetail);
  const { quill, quillRef } = useQuill({
    readOnly: true,

    modules: {
      toolbar: false,
    },
  });

  useEffect(() => {
    async function fetchCardDetail() {
      try {
        const {data}=await getCardDetail(CardDetailId)

        if(data.content){

          quill.setContents(JSON.parse(data.content));
        }else{
        quill.setText('Insert\nDescrioption...\n');
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
    <div className="h-[250px] p-2 border-none">
      <article 
      className="border-none"
      ref={quillRef}></article>
    </div>
  );
}

export default View;
