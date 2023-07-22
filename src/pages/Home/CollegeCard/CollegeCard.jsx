import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const CollegeCard = () => {
    const [Colleges, setColleges] = useState([])
    useEffect(()=> {
        fetch('primary.json')
        .then(res => res.json())
        .then(data => setColleges(data))
    }, [])
    console.log(Colleges);
    return (
        <div>
            <SectionTitle>Colleges Card</SectionTitle>
            
            
        </div>
    );
};

export default CollegeCard;