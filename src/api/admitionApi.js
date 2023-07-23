import axios from "axios";

export const AdmissionClass = (info) => {
  axios
    .post(`${import.meta.env.VITE_apiUrl}/admission`, info)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
