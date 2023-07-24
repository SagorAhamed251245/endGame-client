import { useLocation } from "react-router-dom";
import { GetUser } from "../../../api/userApi";
import { useForm } from "react-hook-form";
import { AdmissionColleges } from "../../../api/admitionApi";

const FromFillUp = () => {
  const location = useLocation();
  const [findUser] = GetUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      college_name,
      college_image,
      _id,
      admission_dates,
      admission_process,
    } = location.state;
    const fromData = {
      ...data,
      college_name,
      college_image,
      college_id: _id,
      userId: findUser?._id,
      admission_dates,
      admission_process,
    };
    AdmissionColleges(fromData);
    alert('clicked')
  };
  console.log(errors);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="candidate_name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="candidate_name"
            type="text"
            placeholder={findUser?.user_name}
            value={findUser?.user_name}
            {...register("candidate_name", { required: true, maxLength: 80 })}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="candidate_email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="candidate_email"
            type="email"
            placeholder={findUser?.email}
            value={findUser?.email}
            {...register("candidate_email", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Mobile Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Mobile Number"
            {...register("phone", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date Of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            placeholder="Date Of Birth"
            {...register("dob", {
              required: true,
            })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
            {...register("address", {
              required: true,
            })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="subject"
            {...register("subject", {
              required: true,
            })}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FromFillUp;
