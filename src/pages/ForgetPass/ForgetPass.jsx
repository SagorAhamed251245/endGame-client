import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { AuthContext } from "../../provider/AuthProvider";

const ForgetPass = () => {
  const { forgerPassword } = useContext(AuthContext);
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    forgerPassword(email)
      .then(() => {
        // Password reset email sent!
        alert('email sent successfully')
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="w-[90%] mx-auto border p-10 rounded shadow">
      <SectionTitle>Reset Password</SectionTitle>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="name" className="font-bold">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            className="block w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-3 py-2 bg-sky-500 rounded font-bold mt-5 hover:bg-sky-400 hover:text-white duration-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPass;
