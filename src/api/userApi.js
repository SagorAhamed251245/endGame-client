import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export const SetUser = (user) => {
  let newUser = {
    email: user.email,
    user_name: user.displayName,
    user_image: user.photoURL,
  };
  axios
    .put(`${import.meta.env.VITE_apiUrl}/users/${user.email}`, newUser)
    .then((response) => {})
    .catch((err) => console.log(err));
}; // newUser is removed from the dependencies array
export const GetUser = () => {
  const { user } = useContext(AuthContext);
  const [findUser, setUser] = useState(null);

  useEffect(() => {
    axios(`${import.meta.env.VITE_apiUrl}/users/${user?.email}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }, [user?.email]);
 
  return [findUser, user];
};
