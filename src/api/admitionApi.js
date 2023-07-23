import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export const AdmissionColleges = (info) => {
  axios
    .post(`${import.meta.env.VITE_apiUrl}/admission`, info)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};


export const GetAdmittedColleges = () => {
    const { user } = useContext(AuthContext);
    const [AdmittedColleges, setAdmittedColleges] = useState(null);
 
    useEffect(() => {
      axios(`${import.meta.env.VITE_apiUrl}/admitted/${user?.email}`)
        .then((response) => setAdmittedColleges(response.data))
        .catch((err) => console.log(err));
    }, [user?.email]);
   console.log(AdmittedColleges);
    return [AdmittedColleges, user];
  };