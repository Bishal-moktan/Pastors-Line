import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  isDetailOpen: false,
  modalName: '',
  contactId: null,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalName = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    switchModalName: (state, action) => {
      state.modalName = action.payload;
    },
    openDetail: (state, action) => {
      state.isDetailOpen = true;
      state.contactId = action.payload;
    },
    closeDetail: (state) => {
      state.isDetailOpen = false;
    },
  },
});

export const { openModal, closeModal, openDetail, closeDetail } =
  contentSlice.actions;

export default contentSlice.reducer;
