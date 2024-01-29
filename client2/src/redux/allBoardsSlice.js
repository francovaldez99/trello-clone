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
    newCard:(state,action)=>{
      let indexCol=state.boardDetail.Columns.findIndex((col)=>col.id===action.payload.idColumn)
      if(indexCol===-1)return
      else{
        state.boardDetail.Columns[indexCol].Cards.push(action.payload.Card)
      }

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

export const { setAllBoards, setBoardDetail, updateBoardOrder,newColBoard ,newCard} =
  allBoardsSlice.actions;
export default allBoardsSlice.reducer;
