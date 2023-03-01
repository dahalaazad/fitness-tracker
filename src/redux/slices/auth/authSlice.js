import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Config from 'react-native-config';

import {mercuryAPI} from '@app/utils';

const initialState = {
  isLoggedIn: false,
  loading: false,
  userToken: null,
  error: null,
  userInfo: {},
};

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (userInfoContainer, {rejectWithValue}) => {
    try {
      const authResponse = await mercuryAPI.post(
        `${userInfoContainer?.loginURL}`,
        userInfoContainer?.userDetails,
      );
      return authResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      return {...state, isLoggedIn: action.payload};
    },
    setToken: (state, action) => {
      return {...state, userToken: action.payload};
    },
    setUserInfo: (state, action) => {
      return {...state, userInfo: action.payload};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userInfo = payload?.data?.data;
      })
      .addCase(authUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {setLoggedIn, setToken, setUserInfo} = authSlice.actions;

export default authSlice.reducer;
