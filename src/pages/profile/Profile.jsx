import { Link } from "react-router-dom";
import { GetUser } from "../../api/userApi";
import SectionTitle from "../../components/SectionTitle";

const Profile = () => {
 const  [findUser] = GetUser();
 console.log("🚀 ~ file: Profile.jsx:7 ~ Profile ~ findUser:", findUser)
 
  return (
    <>
      <SectionTitle>MY Profile</SectionTitle>
      <div className="bg-white shadow-md rounded-lg p-4 max-w-xs mx-auto">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={findUser?.image}
          alt="Profile"
        />
        <div className="mt-4 ">
          <h2 ><strong>Name:</strong> {findUser?.name}</h2>
          <p ><b>Email</b>:{findUser?.email ? findUser?.email : "No Email added"}</p>
          <p ><b>Address:</b>{findUser?.address ? findUser?.address : "No Address added"}</p>
          <p ><b>Phone Number:</b> {findUser?.phoneNumber ? findUser?.phoneNumber : 'No Number added'}</p>
          <p><b>University:</b> {findUser?.university ? findUser?.university : 'No University added'}</p>
          <button className="px-3 py-2 bg-sky-500 rounded font-bold mt-5 hover:bg-sky-400 hover:text-white duration-500"><Link to='/editProfile'  state={findUser}>Edit</Link></button>
        </div>
      </div>
    </>
  );
};

export default Profile;
