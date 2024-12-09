import { message, notification } from 'antd';
import axios from 'axios';

import { API_BASE_URL } from '@/lib/constants/api';
import { useAuth } from '@/lib/stores/auth';
import { customParamsSerializer } from '@/lib/utils/url/params-serializer';

import { DEFAULT_HEADERS } from './constants';

const { clearAuth } = useAuth.getState();

const unauthorizedCode = [401];

export const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  paramsSerializer: customParamsSerializer,
});

const contentType = 'Content-Type';

/* eslint-disable @typescript-eslint/naming-convention */
const getDefaultHeaders = () => {
  const { token } = useAuth.getState();
  return {
    ...DEFAULT_HEADERS,
    Authorization: token ? `Bearer ${token}` : undefined,
    'ngrok-skip-browser-warning': '69420',
  };
};

// API Request interceptor
service.interceptors.request.use(
  (config) => {
    const defaultHeaders = getDefaultHeaders();
    if (!config.headers.Accept) {
      config.headers.Accept = defaultHeaders.Accept;
    }
    if (!config.headers[contentType]) {
      config.headers[contentType] = defaultHeaders[contentType];
    }
    config.headers.Authorization =
      config.headers['authorization'] ??
      config.headers.Authorization ??
      defaultHeaders['Authorization'];

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: 'Error',
    });
    Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Remove token and redirect
    if (unauthorizedCode.includes(error.response.status)) {
      clearAuth();
      return Promise.reject(error);
    }

    const errorMapping = error.response.data.errors.map(
      (err: { detail: string }) => err.detail
    );

    errorMapping.forEach((err: string) => {
      message.error(`Error: ${err}`);
    });

    return Promise.reject(error);
  }
);
