import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.16:3005',
});

type HTTPRequestConfig = AxiosRequestConfig;

function apiClient(instance: AxiosInstance) {
  return {
    get: <T>(url: string, config?: HTTPRequestConfig) => {
      return instance.get<T>(url, config);
    },
  };
}

export default apiClient(instance);
