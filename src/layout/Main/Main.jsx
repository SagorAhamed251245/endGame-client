import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import SearchBar from "../../components/SearchBar";

const Main = () => {
  return (
    <div >
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
