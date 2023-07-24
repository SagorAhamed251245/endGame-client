import React from 'react';

const SearchBar = () => {
  return (
    // This is an example component
   <div className='w-[30%]'>
     <div className="pt-2 relative mx-auto text-gray-600">
      <input
        className="border-2  border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none "
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute left-50 top-0 mt-2 mr-4 bg-sky-500 px-3 py-2 rounded"> {/* Adjust the mt-2 value as needed */}
       Search
      </button>
    </div>
   </div>
  );
};

export default SearchBar;
