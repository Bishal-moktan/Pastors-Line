import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './content/contentSlice';
import contactReducer from './contact/contactSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    contact: contactReducer,
  },
});
