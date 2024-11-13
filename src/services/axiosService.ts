import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {errorMessage} from '@utils/helperFunction';
import {popUpType} from '@constants';
import {showMessage} from 'react-native-flash-message';

// Base URL for API requests
const BASE_URL = 'https://api.themoviedb.org/3/';
const TIMEOUT = 20000; // Request timeout in milliseconds
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGM0NjRlMDE3NmYwMjQ1OTNiZWZjNTU5ZmRjMmE2NSIsIm5iZiI6MTczMTQ4MzE2Ny41MDgzMTAzLCJzdWIiOiI2NzMzYWNkZDNlODJiYTc5ZmNjZjA0NWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HYp8vbRi6g6EZuCXC0UBZkbVP_jIC_CKbzse2hC0vc0';

// Create an Axios instance with default configuration
const axiosService: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

// Add a request interceptor to handle configuration and network checks
axiosService.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    // Check for internet connection
    const {isConnected} = await NetInfo.fetch();
    if (!isConnected) {
      console.error('No internet connection.');
      return Promise.reject('No internet connection');
    }

    return config;
  },
  error => {
    console.error('Request Error:', error.message);
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle errors and responses
axiosService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async error => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }
    showMessage({
      message: errorMessage(error),
      type: popUpType.danger,
    });
    Promise.reject(errorMessage(error));
    return error.response;
  },
);

export default axiosService;
