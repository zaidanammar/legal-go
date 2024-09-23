import { notification } from 'antd';
import axios from 'axios';

import { API_BASE_URL } from '@/lib/constants/api';
import { useAuth } from '@/lib/stores/auth';
import { customParamsSerializer } from '@/lib/utils/url/params-serializer';

import { DEFAULT_HEADERS } from './constants';

// const { clearAuth } = useAuth.getState();

// const unauthorizedCode = [401, 403];

export const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  paramsSerializer: customParamsSerializer,
});

const contentType = 'Content-Type';

const getDefaultHeaders = () => {
  const { token } = useAuth.getState();
  return {
    ...DEFAULT_HEADERS,
    Authorization: token ? `Bearer ${token}` : undefined,
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
    // if (unauthorizedCode.includes(error.response.status)) {
    //   clearAuth();
    //   return Promise.reject(error);
    // }

    // const notificationParam = {
    //   message: '',
    //   description: '',
    // };

    // const isRequestingResponseTypeAsBlob =
    //   error.request.responseType === 'blob';
    // const responseHeader = isRequestingResponseTypeAsBlob
    //   ? JSON.parse(await error.response.data.text())?.header
    //   : error.response?.data.header;

    // notificationParam.message =
    //   responseHeader?.detail ?? responseHeader?.message;
    // notificationParam.description = `Trace ID: ${responseHeader?.trace_id}`;

    // const messageKey = MESSAGE_RESPONSE_KEYS[notificationParam.message] ?? '';
    // if (messageKey) {
    //   message.error(messageKey);
    // } else {
    //   message.open({
    //     content: (
    //       <>
    //         <strong>{notificationParam.message}</strong>
    //         {!isProduction ? (
    //           <>
    //             <br />
    //             <span>{notificationParam.description}</span>
    //           </>
    //         ) : null}
    //       </>
    //     ),
    //   });
    // }

    return Promise.reject(error);
  }
);
