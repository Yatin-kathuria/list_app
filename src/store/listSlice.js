import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  lists: [
    {
      id: 1,
      title: 'Teams',
      cards: [
        {
          id: 1,
          title: 'Hello',
          description:
            'lorem ipsumsdidfhdsff dsfsdifhsdihfsdoifsdf sdfsdihfsdhf',
        },
        {
          id: 2,
          title: 'Hello',
          description:
            'lorem ipsumsdidfhdsff dsfsdifhsdihfsdoifsdf sdfsdihfsdhf',
        },
      ],
    },
    {
      id: 2,
      title: 'Products',
      cards: [],
    },
  ],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setInitialLists: (state, action) => {
      state.lists = action.payload;
    },
    addList: (state, action) => {
      state.lists.push({
        id: uuidv4(),
        title: action.payload,
        cards: [],
      });
    },
    deleteList: (state, action) => {
      const id = action.payload;
      const index = state.lists.findIndex((list) => list.id === id);
      state.lists.splice(index, 1);
    },
    addCard: (state, action) => {
      const { listId, title, description } = action.payload;
      const index = state.lists.findIndex((list) => list.id === listId);
      state.lists[index].cards.push({ id: uuidv4(), title, description });
    },
    deleteCard: (state, action) => {
      const { listId, cardId } = action.payload;
      const listIndex = state.lists.findIndex((list) => list.id === listId);
      const cardIndex = state.lists[listIndex].cards.findIndex(
        (card) => card.id === cardId
      );
      state.lists[listIndex].cards.splice(cardIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addList, deleteList, addCard, deleteCard, setInitialLists } =
  listSlice.actions;

export default listSlice.reducer;
