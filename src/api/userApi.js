
import axios from "axios";

export const SetUser = (user) => {
  let newUser = {
    email: user.email,
    user_name: user.displayName,
    user_image: user.photoURL,
  };

  axios
    .put(`${import.meta.env.VITE_apiUrl}/users/${user.email}`, newUser)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}; // newUser is removed from the dependencies array
