import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import ResearchPaper from "./ResearchPaper/ResearchPaper";

const Home = () => {
  return (
    <>
      <CollegeCard slice={[0,3]}></CollegeCard>
      <Gallery></Gallery>
      <ResearchPaper></ResearchPaper>
    </>
  );
};

export default Home;
