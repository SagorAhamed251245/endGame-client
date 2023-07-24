import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { SetUser } from "../../api/userApi";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { singInUser, singinWithGoogle } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { email, password } = data;

    singInUser(email, password)
      .then((result) => {
        ;
        SetUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handelGoogleSingin = () => {
    singinWithGoogle()
      .then((result) => {
        SetUser(result.user);
        // setNewUser(result.user);
       ;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="flex items-center w-full h-[100vh] justify-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Login to our platform
            </h5>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                {...register("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  /*  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
                    message:
                      "Password must contain at least one capital letter and one special character (!@#$%^&*)",
                  }, */
                })}
                autoComplete="on"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="px-3 py-2 bg-sky-500 rounded font-bold mt-5 hover:bg-sky-400 hover:text-white duration-500">
              Login
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Have an account?{" "}
              <Link
                to="/singup"
                className="text-pink-500 hover:underline dark:text-pink-500"
              >
                Sing Up
              </Link>
            </div>
          </form>
          <div className=" mb-1 w-10/12 mx-auto">
            <button
              onClick={handelGoogleSingin}
              className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
            >
              Login With Google
            </button>
          </div>
          <Link to='/resetPass'>Reset Password</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
