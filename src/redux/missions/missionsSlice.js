import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
  hasError: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joiningMission(state, action) {
      const { id } = action.payload;
      const arrayChanged = state.missions.map((mission) => {
        if (mission.id !== id) return mission;
        return { ...mission, reserved: true };
      });
      state.missions = arrayChanged;
    },
    leavingMission(state, action) {
      const { id } = action.payload;
      const arrayChanged = state.missions.map((mission) => {
        if (mission.id !== id) return mission;
        return { ...mission, reserved: false };
      });
      state.missions = arrayChanged;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })

      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
        if (state.missions.length === 0) {
          state.missions = action.payload.map((mission) => {
            const myMission = {
              id: mission.mission_id,
              name: mission.mission_name,
              description: mission.description,
              reserved: false,
            };
            return myMission;
          });
        }
      })

      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const missionsActions = missionsSlice.actions;

export default missionsSlice.reducer;
