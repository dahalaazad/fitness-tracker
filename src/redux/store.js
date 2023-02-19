import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {authReducer, fitnessReducer} from './slices';

const rootReducer = combineReducers({
  auth: authReducer,
  fitness: fitnessReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
