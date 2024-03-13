import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allBoards: [],
  boardDetail: {},
};

const allBoardsSlice = createSlice({
  name: "allBoards",
  initialState: initialState,
  reducers: {
    setAllBoards: (state, action) => {
      state.allBoards = action.payload;
    },

    setBoardDetail: (state, action) => {
      state.boardDetail = action.payload;
    },
    newColBoard:(state,action)=>{
      state.boardDetail.Columns.push(action.payload)
    },
    updateColName:(state,action)=>{
      let indexCol=state.boardDetail.Columns.findIndex((col)=>col.id===action.payload.idColumn)
      if(indexCol===-1)return
      state.boardDetail.Columns[indexCol].columnName=action.payload.columnName
    },
    updateCardName:(state,action)=>{
      let indexCol=state.boardDetail.Columns.findIndex((col)=>col.id===action.payload.idColumn)
      let indexCard = state.boardDetail.Columns[indexCol].Cards.findIndex((card)=>card.id===action.payload.CardId)
      state.boardDetail.Columns[indexCol].Cards[indexCard].CardName=action.payload.CardName
    }
    ,
    deleteCard:(state,action)=>{
      let indexCol=state.boardDetail.Columns.findIndex((col)=>col.id===action.payload.idColumn)
      let updatedCols =state.boardDetail.Columns.map((col,index)=>{
        if(index===indexCol){
          return {
            ...col,
            Cards:col.Cards.filter((card)=>card.id!=action.payload.CardId)
          }
        }else {
          return {
            ...col
          }
        }
      })

      
      state.boardDetail = {
        ...state.boardDetail,
        Columns:updatedCols.map((col,indexCol)=>{
          return {
            ...col,
            orderColumn:indexCol,
            Cards:col.Cards.map((card,indexCard)=>{
              return {
                ...card,
                orderCard:indexCard
              }
            })
          }
        })
      }
    }
    
    ,

    deleteColumnAction:(state,action)=>{
      let indexCol=state.boardDetail.Columns.findIndex((col)=>col.id===action.payload.idColumn)
      if(indexCol===-1)return
     let updatedCol =state.boardDetail.Columns.filter((col)=>col.id!=action.payload.idColumn)
      state.boardDetail={
        ...state.boardDetail,
        Columns: updatedCol.map((col,index)=>{
          return {
            ...col,
            orderColumn: index,
          }
        })
      }
     


    },
    newCard:(state,action)=>{
      let indexCol=state.boardDetail.Columns.findIndex((col)=>col.id===action.payload.idColumn)
      if(indexCol===-1)return
      else{
        state.boardDetail.Columns[indexCol].Cards.push(action.payload.Card)
      }

    },
    newCoverCard: (state, action) => {
      const { idColumn, idCard, coverCard } = action.payload;
    

      const columnIndex = state.boardDetail.Columns.findIndex(col => col.id === idColumn);
      if (columnIndex === -1) return;
    
      const cardIndex = state.boardDetail.Columns[columnIndex].Cards.findIndex(card => card.id === idCard);
      if (cardIndex === -1) return;
    
     
      state.boardDetail.Columns[columnIndex].Cards[cardIndex].coverCard = coverCard;
    }
    
   , updateBoardOrder: (state, action) => {
      const { source, destination, type } = action.payload;
      if (!destination) {
        return;
      }

      if (type === "column") {
        // Operación de arrastrar y soltar para columnas
        const updatedColumns = state.boardDetail.Columns;
        const [movedColumn] = updatedColumns.splice(source.index, 1);

        updatedColumns.splice(destination.index, 0, movedColumn);

        const updatedColumnsWithOrder = updatedColumns.map((col, index) => ({
          ...col,
          orderColumn: index,
        }));

        state.boardDetail = {
          ...state.boardDetail,
          Columns: updatedColumnsWithOrder,
        };
      } else if (type === "task") {
        const updatedColumns = state.boardDetail.Columns;
        const sourceColumnIndex = updatedColumns.findIndex(
          (col) => col.id === source.droppableId
        );
        const destinationColumnIndex = updatedColumns.findIndex(
          (col) => col.id === destination.droppableId
        );

        const movedTask = updatedColumns[sourceColumnIndex].Cards[source.index];
        updatedColumns[sourceColumnIndex].Cards.splice(source.index, 1);
        updatedColumns[destinationColumnIndex].Cards.splice(
          destination.index,
          0,
          movedTask
        );

        state.boardDetail = {
          ...state.boardDetail,
          Columns: updatedColumns.map((col, indexCol) => {
            return {
              ...col,
                orderColumn:indexCol
              ,Cards: col.Cards.map((card, indexCard) => {
                return {
                  ...card,
                  orderCard: indexCard,
                };


              }),
            };
          }),
        };
      }
    },
  },
});

export const { setAllBoards, setBoardDetail, updateBoardOrder,newColBoard ,newCard,newCoverCard,updateColName,deleteColumnAction,updateCardName,deleteCard} =
  allBoardsSlice.actions;
export default allBoardsSlice.reducer;
