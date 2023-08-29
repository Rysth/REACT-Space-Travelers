import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import rocketSlice from './rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
    rockets: rocketSlice,
  },
});

export default store;
