import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

const initialState = {
  isLoggedIn: false,
  loading: false,
  userToken: null,
  error: null,
  userInfo: {},
};

export const signupWithEmail = createAsyncThunk(
  'auth/signupWithEmail',
  async (userSignUpInfo, {rejectWithValue}) => {
    try {
      const signUpResponse = await axios.post(
        `${Config.API_URL}/signup`,
        userSignUpInfo,
      );
      return signUpResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signupWithEmail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupWithEmail.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userInfo = payload?.data;
      })
      .addCase(signupWithEmail.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
