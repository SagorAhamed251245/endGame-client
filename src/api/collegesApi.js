import { useEffect, useState } from "react";

import axios from "axios";

const CollegesApi = () => {
  const [AllColleges, setAllColleges] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_apiUrl}/colleges`)
      .then((response) => setAllColleges(response.data))
      .catch((err) => console.log(err));
  }, []);
  

  return [AllColleges];
};

export default CollegesApi;
