// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlicer from '../features/authSlicer';
// import candidateReducer from './reducers/questionsSlice';

const store = configureStore({
  reducer: {
    auth: authSlicer,
  },
});

export default store;
