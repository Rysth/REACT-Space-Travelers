import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// fetch data from API
export const getData = createAsyncThunk('rockets/getData', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  rockets: [],
  isLoading: false,
  hasError: false,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    // reserve rocket
    reserve: (state, action) => {
      const reserved = state.rockets.find((rocket) => rocket.id === action.payload);
      reserved.isReserved = true;
    },
    // cancel booking
    cancelBooking: (state, action) => {
      const book = state.rockets.find((rocket) => rocket.id === action.payload);
      book.isReserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })

      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
        if (state.rockets.length === 0) {
          state.rockets = action.payload.map((rocket) => {
            const myRocket = {
              id: rocket.rocket_id,
              name: rocket.rocket_name,
              image: rocket.flickr_images[0],
              type: rocket.rocket_type,
              description: rocket.description,
              isReserved: false,
            };
            return myRocket;
          });
        }
      })

      .addCase(getData.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default rocketSlice.reducer;
export const { reserve, cancelBooking } = rocketSlice.actions;
