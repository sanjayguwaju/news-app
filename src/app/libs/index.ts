import axios, { AxiosInstance } from "axios";

const axiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      "content-type": "application/json",
    },
  });
};

export { axiosInstance };