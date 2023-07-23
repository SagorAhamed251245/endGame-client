import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle";

const CollegesDetails = () => {
  const collage = useLoaderData()
 
  return (
    <>
      <SectionTitle>CollegesDetails</SectionTitle>
      <div>CollegesDetails</div>
    </>
  );
};

export default CollegesDetails;
