import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {
  errorInterceptors,
  requestInterceptors,
  responseInterceptors,
} from '../../utils';

const instance = axios.create({
  baseURL: 'http://192.168.1.16:3005',
});

instance.interceptors.response.use(responseInterceptors, errorInterceptors);
instance.interceptors.request.use(requestInterceptors, errorInterceptors);

type HTTPRequestConfig = AxiosRequestConfig;

function apiClient(instance: AxiosInstance) {
  return {
    get: <T>(url: string, config?: HTTPRequestConfig) => {
      return instance.get<T>(url, config);
    },
  };
}

export default apiClient(instance);
