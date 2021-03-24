import { configureStore } from '@reduxjs/toolkit';
import logistics from './logistics';

export default configureStore({
  reducer: {
    logistics: logistics,
  },
});
