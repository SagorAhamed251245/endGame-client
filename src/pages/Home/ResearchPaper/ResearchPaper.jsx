import SectionTitle from "../../../components/SectionTitle";

const ResearchPaper = () => {
  const Papers = [
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
  ];
  return (
    <>
      <SectionTitle>Research Papers</SectionTitle>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 overflow-hidden">
        <div className="-m-1 flex flex-wrap md:-m-2 overflow-hidden">
          {Papers.map((paper, index) => (
            <div key={index} className="flex w-1/3 flex-wrap  overflow-hidden">
              <div className="w-full  p-1 md:p-2 overflow-hidden rounded-lg">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110 duration-1000"
                  src={paper?.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResearchPaper;
