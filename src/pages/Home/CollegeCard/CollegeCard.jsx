import { useEffect, useState } from "react";

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
            
        </div>
    );
};

export default CollegeCard;