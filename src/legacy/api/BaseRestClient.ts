import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { toRestError } from './RestError';

export class BaseRestClient {
  axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);

    this.axiosInstance.defaults.withCredentials = false;
  }

  async apiGet<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.axiosInstance(url, params);
      return response.data;
    } catch (e) {
      throw toRestError(e as AxiosError<unknown, unknown>);
    }
  }

  async apiPost<T>(
    url: string,
    data?: unknown,
    params?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.post(url, data, params);
      return response.data;
    } catch (e) {
      throw toRestError(e as AxiosError<unknown, unknown>);
    }
  }

  async apiPut<T>(
    url: string,
    data?: unknown,
    params?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.put(url, data, params);
      return response.data;
    } catch (e) {
      throw toRestError(e as AxiosError<unknown, unknown>);
    }
  }

  async apiDelete<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.axiosInstance.delete(url, params);
      return response.data;
    } catch (e) {
      throw toRestError(e as AxiosError<unknown, unknown>);
    }
  }
}
