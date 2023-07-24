import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export const AdmissionColleges = (info) => {
  axios
    .post(`${import.meta.env.VITE_apiUrl}/admission`, info)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
export const ReviewColleges = (info, id) => {
    axios
      .patch(`${import.meta.env.VITE_apiUrl}/reviews/${id}`, info)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
export const GetAdmittedColleges = () => {
  const { user } = useContext(AuthContext);
  const [AdmittedColleges, setAdmittedColleges] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_apiUrl}/admitted/${user?.email}`)
      .then((response) => setAdmittedColleges(response.data))
      .catch((err) => console.log(err));
  }, [user?.email]);
  console.log(AdmittedColleges);
  return [AdmittedColleges, user];
};

export const GetReviewColleges = () => {
  const { user } = useContext(AuthContext);
  const [reviewColleges, setReviewColleges] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_apiUrl}/admitted`)
      .then((response) => setReviewColleges(response.data))
      .catch((err) => console.log(err));
  }, [user?.email]);
  console.log(reviewColleges);
  return [reviewColleges, user];
};
