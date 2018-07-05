import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: process.env.API_TIMEOUT
});


httpClient.interceptors.request.use(function (config) {
  let token = null;
  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;

}, function (error) {
  return Promise.reject(error);
});

export default httpClient;
