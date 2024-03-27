import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import { HttpMethod } from "./types";
import { logger } from "src/shared/services/logger";

export class AxiosService {
  private http: AxiosInstance;
  private baseURL = "https://api.stackexchange.com/2.3/";

  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
    });

    this.injectInterceptors();
  }

  public async get<T>(
    url: string,
    params?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(HttpMethod.GET, url, {
      params,
    });
  }

  private async request<T>(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  private injectInterceptors() {
    this.http.interceptors.request.use((request) => {
      logger.debug("outbound axios request", {
        baseUrl: request.baseURL,
        method: request.method,
        data: request.data,
        params: request.params,
        url: request.url,
        headers: request.headers,
      });
      return request;
    });

    this.http.interceptors.response.use(
      (response) => {
        logger.debug(`outbound response success`, {
          baseUrl: response.config.baseURL,
          url: response.config.url,
          status: `${response.status}:${response.statusText}`,
          headers: response.headers,
          body: response.data,
        });
        return response;
      },

      (error) => {
        if (error instanceof Error) {
          const axiosError = error as AxiosError;
          logger.debug("outbound response failure", {
            baseUrl: axiosError?.response?.config.baseURL,
            url: axiosError?.response?.config.url,
            status: axiosError.response?.status,
            headers: axiosError.response?.headers,
            body: axiosError.response?.data,
          });
        }
        return Promise.reject(error);
      }
    );
  }

  private normalizeError(error: any) {
    return Promise.reject(error);
  }
}
