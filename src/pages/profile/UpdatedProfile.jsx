import { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation } from "react-router-dom";
import useUpdateUser from "../../api/updateProfile";



const UpdatedProfile = () => {
  const location = useLocation();
  const profileInfo = location.state;

  const { setUserProfile, UpdatedUserEmail } = useContext(AuthContext);
  const updateUser = useUpdateUser()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phoneNumber = form.phoneNumber.value;
    const image = form.image.value;
    const password = form.password.value;
    const university = form.university.value;
    const submitInfo = {
      name,
      email,
      address,
      phoneNumber,
      university,
      image,
    };
    setUserProfile(name, image);

    updateUser(submitInfo)
    alert("Profile update successful");
  };
  return (
    <>
      <SectionTitle>Edit Profile</SectionTitle>
      <div className="w-[90%] mx-auto border p-10 rounded shadow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="font-bold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={profileInfo?.name}
              placeholder={profileInfo?.name}
              className="block w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={profileInfo?.email}
              placeholder={profileInfo?.email}
              className="block w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="image" className="font-bold">
              Profile image:
            </label>
            <input
              type="text"
              name="image"
              id="image"
              defaultValue={profileInfo?.image}
              placeholder={profileInfo?.image}
              className="block w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="address" className="font-bold">
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              defaultValue={profileInfo?.address}
              placeholder={profileInfo?.address}
              className="block w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="font-bold">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              defaultValue={profileInfo?.phoneNumber}
              placeholder={profileInfo?.phoneNumber}
              className="block w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="university" className="font-bold">
              University:
            </label>
            <input
              type="text"
              name="university"
              id="university"
              defaultValue={profileInfo?.university}
              placeholder={profileInfo?.university}
              className="block w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-bold">
            password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
            placeholder="password"
              className="block w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 bg-sky-500 rounded font-bold mt-5 hover:bg-sky-400 hover:text-white duration-500"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatedProfile;
