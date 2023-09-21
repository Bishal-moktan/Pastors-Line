import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  contact_ids: [],
  contactLists: {},
  singleContact: {},
};

const url = 'https://api.dev.pastorsline.com/api/contacts.json';
const config = {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
};

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get(
        `${url}?companyId=560&query=${payload.query}&countryId=${payload.countryId}`,
        config
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactSlice = createSlice({
  name: 'contact',
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact_ids = action.payload.contacts_ids;
        state.contactLists = action.payload.contacts;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { openModal, closeModal } = contactSlice.actions;

export default contactSlice.reducer;
