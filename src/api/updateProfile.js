// useUpdateUser.js

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useUpdateUser = () => {
  const { user } = useContext(AuthContext);

  const updateUser = (info) => {
    // Make sure you have the necessary data before making the API request
    if (user?.email) {
      axios
        .patch(`${import.meta.env.VITE_apiUrl}/updateUser/${user.email}`, info)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  };

  return updateUser;
};

export default useUpdateUser;
