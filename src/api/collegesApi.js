import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const CollegesApi = () => {
    const { user, loading } = useContext(AuthContext);
   

    
    const { refetch, data: AllColleges = [] } = useQuery({
        queryKey: [`MyClass`],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_apiUrl}/colleges`)
           
            return res.data;
        },
    })

    return [AllColleges, refetch]
};

export default CollegesApi;