import { GetReviewColleges } from "../../../api/admitionApi";
import SectionTitle from "../../../components/SectionTitle";

const Reviewcard = () => {
  const [reviewColleges] = GetReviewColleges();
  const filterItem = reviewColleges.filter((reviews) => reviews.review);
  console.log(filterItem);
  return (
    <>
      <SectionTitle>Review</SectionTitle>
      <div className="flex gap-2 flex-warp justify-center">
        {filterItem.map((reviews, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-96 h-[500px] overflow-hidden"
          >
            <img
              className="w-full h-32  mx-auto"
              src={reviews?.college_image}
              alt="Profile"
            />
            <div className="mt-4 ">
              <h2>
                <strong>Reviewers Name:</strong> {reviews?.candidate_name}
              </h2>
              <h2>
                <strong>College Name:</strong> {reviews?.college_name}
              </h2>
              <p>Review:{reviews?.review.slice(0, 150)}</p>
              <p>Ratting:{reviews?.ratting}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviewcard;
