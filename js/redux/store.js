import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobs/jobsSlice';

export default configureStore({
  reducer: {
      jobs: jobsReducer,
  },
})