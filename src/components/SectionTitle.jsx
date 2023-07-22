const SectionTitle = ({ children }) => {
  return (
    <div className="md:w-96 w-48 mx-auto my-10  py-5 border-y-4  border-yellow-500 ">
      <h2 className="text-center  text-lg font-bold md:text-3xl text-sky-500 ">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
