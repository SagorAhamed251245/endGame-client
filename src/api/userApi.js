import useAxios from "./useAxios";

export const setUser = (user) => {
  const [axiosReq] = useAxios;
  const newUser = {
    email: user.email,
    user_name: user.displayName,
    user_image: user.photoURL,
  };
  axiosReq
    .put(`/users/${user.email}`, newUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
