import axios from "axios";

const useAxios = () => {
  const axiosReq = axios.create({
    baseURL: `${import.meta.env.VITE_apiUrl}`,
  });

  return [axiosReq] ;
};

export default useAxios;
