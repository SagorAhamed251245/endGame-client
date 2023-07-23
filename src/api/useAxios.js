import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_apiUrl}`,
});

const useAxios = (method) => {
  return async (url, data = null) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
      });
      return response.data;
    } catch (error) {
      throw new Error("An error occurred while making the API request.");
    }
  };
};

export default useAxios;
