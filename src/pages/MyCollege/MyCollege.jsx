import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { GetAdmittedColleges } from "../../api/admitionApi";
import CollegesApi from "../../api/collegesApi";
import { useEffect, useState } from "react";

const MyCollege = () => {
  const [AdmittedColleges] = GetAdmittedColleges();
  const [filterCollege, setFilterCollege] = useState([]);

  const [AllColleges] = CollegesApi();

  useEffect(() => {
    const filteredArray = AllColleges.filter((item1) =>
      AdmittedColleges.some((item2) => item2.college_id === item1._id)
    );
    setFilterCollege(filteredArray);
  }, [AllColleges, AdmittedColleges]);
  

  return (
    <>
      <SectionTitle>My College</SectionTitle>

      <div className="">
        {filterCollege.map((college) => (
          <div
            key={college._id}
            className="flex gap-5 my-10 border w-[90%] mx-auto rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="h-auto flex w-60">
              <img
                className="object-cover"
                src={college?.college_image}
                alt={college?.college_name}
              />
            </div>
            <div className="text-lg font-semibold  mt-5">
              <p className=" hover:text-sky-500">{college?.college_name}</p>
              <p className=" hover:text-sky-500">
                Admission Dates: {college?.admission_dates}
              </p>
              <p className=" hover:text-sky-500">
                Admission process: {college?.admission_process}
              </p>
              <form action="">
                <div>
                  <input
                    className="border py-1 border-black px-1 rounded my-2"
                    type="text"
                    name="review"
                    placeholder="Review"
                  />
                </div>
                <div>
                  <input
                    className="border py-1 border-black px-1 rounded"
                    type="text"
                    name="ratting"
                    placeholder="Ratting"
                  />
                </div>
                <div>
                  <button className="py-2 px-3 bg-sky-500 my-2 rounded hover:bg-sky-400">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyCollege;
