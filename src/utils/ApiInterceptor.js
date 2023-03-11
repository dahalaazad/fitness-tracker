import axios from 'axios';
import Config from 'react-native-config';
import {showToast} from './ShowToast';

export const mercuryAPI = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setupInterceptor(store) {
  mercuryAPI.interceptors.request.use(
    config => {
      config.headers.Authorization = store.getState().auth.userToken || '';
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  mercuryAPI.interceptors.response.use(
    response => response,
    error => {
      let errorMessage = error?.response?.data?.message;

      switch (error?.response?.status) {
        case 401:
          showToast(
            'error',
            'Warning',
            errorMessage === 'Signature has expired'
              ? 'Session has expired'
              : errorMessage,
          );
          break;
        case 404:
          showToast('error', 'Warning', 'Please connect to a network');
          break;
        case 422:
          showToast('error', 'Warning', 'Please check your input format');
          break;
        default:
          showToast('error', 'Warning', 'Oops! Something went wrong.');
      }
      return Promise.reject(error);
    },
  );
}
