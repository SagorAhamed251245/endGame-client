import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";

import axios from "axios";

const CollegeCard = ({slice}) => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_apiUrl}/colleges`).then((res) =>
      setColleges(res.data)
    );
  }, []);
 
  return (
    <>
      <SectionTitle>Colleges Card</SectionTitle>
      <div className="grid gap-4 lg:grid-cols-3 mt-4 w-[90%] mx-auto">
        {colleges.slice(...slice).map((college, index) => (
          <div
            key={index}
            className=" rounded-lg flex flex-col shadow-md p-4 h-[750px] "
          >
            <img
              src={college.college_image}
              alt={college.college_name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{college.college_name}</h2>
            <div className="mt-2">
              <p className="font-bold">Admission Dates:</p>
              <p>{college.admission_dates}</p>
            </div>
            <div className="mt-2">
              <p className="font-bold">Events:</p>
              <ul className="list-disc ml-[20%]">
                {college.events.map((evs, index) => (
                  <li key={index}>{evs.event_name}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <p className="font-bold">Research History:</p>
              <p>{college.research_history.slice(0, 75)}...</p>
            </div>
            <div className="mt-2">
              <p className="font-bold">Number of the research:</p>
              <p>{college?.research_number ? college?.research_number : 0 }</p>
            </div>
            <div className="mt-2 grow">
              <p className="font-bold">Sports:</p>
              <div>
                <p>Team:</p>
                <ul className="list-disc ml-[20%]">
                  {college.sports.team.map((sport, index) => (
                    <li key={index}>{sport.sport_name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>Individual:</p>
                <ul className="list-disc ml-[20%]">
                  {college.sports.individual.map((sport, index) => (
                    <li key={index}>{sport}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* btn */}
            <div className="">
              <button className="px-3 py-2 bg-sky-500 rounded font-bold mt-5 hover:bg-sky-400 hover:text-white duration-500">
                <Link to={`/college/${college._id}`}>View more</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollegeCard;
