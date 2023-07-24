import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-primary h-screen flex items-center justify-center flex-col">
            <h1 className="text-5xl font-bold">Error 404</h1>
            <p ><span className="text-3xl font-bold text-white">Go Back To </span><Link><button className="btn font-bold text-black">Home Page</button></Link></p>
        </div>
    );
};

export default ErrorPage;