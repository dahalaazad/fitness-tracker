import axios from 'axios';
import Config from 'react-native-config';

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
      return Promise.reject(error);
    },
  );
}
