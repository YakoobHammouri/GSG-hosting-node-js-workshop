import axios, { AxiosPromise, Method } from 'axios';
export default function RestApiCall(
  methodType: Method,
  endPoint: string,
  payload?: any,
  ContentType?: string
): AxiosPromise<any> {
  return axios(`${process.env.API_URL}/${endPoint}`, {
    method: methodType,
    headers: {
      'Content-Type': ContentType ? ContentType : '*/*',
    },
    data: payload,
  });
}
