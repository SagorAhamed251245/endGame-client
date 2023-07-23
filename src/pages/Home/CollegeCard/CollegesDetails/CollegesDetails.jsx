import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle";

const CollegesDetails = () => {
  const college = useLoaderData();

  return (
    <>
      <SectionTitle>CollegesDetails</SectionTitle>
      <div className="w-[90%] mx-auto">
        <div className=" rounded-lg flex flex-col shadow-md p-4 h-auto ">
          <img
            src={college.college_image}
            alt={college.college_name}
            className="w-full h-96 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">{college.college_name}</h2>
          <div className="mt-2">
            <p className="font-bold">Admission Dates:</p>
            <p>{college.admission_dates}</p>
          </div>
          <div className="mt-2">
            <p className="font-bold">Admission Process:</p>
            <p>{college.admission_process}</p>
          </div>
          <div className="mt-2">
            <p className="font-bold">Events:</p>
            <div className="list-disc ">
              {college.events.map((event, index) => (
                <div key={index} className="my-2">
                  <div className="my-5">
                    <p>
                      <strong>Event Name:</strong>
                      {event.event_name}
                    </p>
                    <p>
                      <strong>Date:</strong>
                      {event.event_date}
                    </p>
                    <p>
                      <strong>Details:</strong>
                      {event.event_description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="font-bold">Research History:</p>
            <p>{college.research_history}</p>
          </div>
          <div className="mt-2">
            <p className="font-bold">Research Works:</p>
            <p>{college.research_works}</p>
          </div>
          <div className="mt-2 grow">
            <p className="font-bold">Sports:</p>
            <div>
              <p className="ml-[1%]">
                <strong>Team:</strong>
              </p>
              <ul className="list-disc ml-[2%]">
                {college.sports.team.map((sport, index) => (
                  <div key={index} className="my-5">
                    <p>
                      <strong>Sport name:</strong>
                      {sport.sport_name}
                    </p>
                    <p>Team count:{sport?.team_count}</p>
                    <p>players per team:{sport?.players_per_team}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div>
              <p className="ml-[1%]">
                <strong>Individual:</strong>
              </p>
              <div className="list-disc ml-[2%]">
                {college.sports.individual.map((sport, index) => (
                  <p key={index}>
                    <strong>Sport name:</strong>
                    {sport}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* btn */}
        </div>
      </div>
    </>
  );
};

export default CollegesDetails;
