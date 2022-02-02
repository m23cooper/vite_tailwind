

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

import { config } from '@/config';

const _axios:AxiosInstance = axios.create({
	baseURL: config.dataURL,
	timeout: 10000,
	withCredentials: false,
	// transformRequest: [(data) => JSON.stringify(data.data),],
	headers: {
		'Accept': 'application/x-www-form-urlencoded',
		'Content-Type': 'application/x-www-form-urlencoded',
	},
	// application/x-www-form-urlencoded
});

// Add a request interceptor
_axios.interceptors.request.use(
	function (config: AxiosRequestConfig) {
		// Do something before request is sent
		//  TODO:   Add uuid
		console.group(">>>>>>    Service Axios.request " + config.url);
		return config;
	},
	function (error?:any) {
		// Do something with request error
		console.log("-----     Service Axios.request.error " + error);
		return Promise.reject(error);
	}
);

// Add a response interceptor
_axios.interceptors.response.use(
	function (response: AxiosResponse) {
		// Do something with response data
		//  TODO:   Update uuid
		console.log("<<<<      Service Axios.response " + (Number(response.headers['x-ratelimit-limit']) - Number(response.headers['x-ratelimit-remaining'])) + "ms " + response.config.url);
		console.groupEnd();
		return response;
	},
	function (error?:any) {
		// Do something with response error
		console.log("-----     Service Axios.response.error " + error);
		console.groupEnd();
		return Promise.reject(error);
	}
);

export function useAxios():AxiosInstance
{
	return _axios;
}
