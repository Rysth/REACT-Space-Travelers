import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import rocketSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
    rockets: rocketSlice,
  },
});

export default store;
