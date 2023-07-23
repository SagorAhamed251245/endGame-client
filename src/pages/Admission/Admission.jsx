import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  console.log(colleges);

  useEffect(() => {
    axios(`${import.meta.env.VITE_apiUrl}/colleges`).then((res) =>
      setColleges(res.data)
    );
  }, []);
  return (
    <>
      <SectionTitle>Admission</SectionTitle>

      <div className="">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="flex gap-5 my-10 border w-[90%] mx-auto rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="h-48 flex w-48">
              <img
                className="object-cover"
                src={college.college_image}
                alt={college.college_name}
              />
            </div>
            <div className="text-2xl font-semibold  mt-5">
              <Link className="hover:underline hover:text-sky-500">{college.college_name}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admission;
