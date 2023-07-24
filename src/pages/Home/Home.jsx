import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import ResearchPaper from "./ResearchPaper/ResearchPaper";
import Reviewcard from "./review/Reviewcard";

const Home = () => {
  return (
    <>
      <CollegeCard slice={[0,3]}></CollegeCard>
      <Gallery></Gallery>
      <ResearchPaper></ResearchPaper>
      <Reviewcard></Reviewcard>
    </>
  );
};

export default Home;
