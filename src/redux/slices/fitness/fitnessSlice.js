import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {mercuryAPI} from '@app/utils';

const initialState = {
  loading: false,
  error: null,
  workoutList: [],
};

export const addWorkout = createAsyncThunk(
  'fitness/addWorkout',
  async (workoutData, {rejectWithValue}) => {
    try {
      const addWorkoutResponse = await mercuryAPI.post(
        'api/v1/workouts',
        workoutData,
      );
      return addWorkoutResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getAllWorkout = createAsyncThunk(
  'fitness/getAllWorkout',
  async (_, {rejectWithValue}) => {
    try {
      const getAllWorkoutResponse = await mercuryAPI.get('api/v1/workouts');
      return getAllWorkoutResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fitnessSlice = createSlice({
  name: 'fitness',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addWorkout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWorkout.fulfilled, (state, {payload}) => {
        state.loading = false;
      })
      .addCase(addWorkout.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAllWorkout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllWorkout.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.workoutList = payload?.data || [];
      })
      .addCase(getAllWorkout.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default fitnessSlice.reducer;
