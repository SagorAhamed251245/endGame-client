import { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleClick = () => {
    setClicked(true);
    toggleMobileMenu();
    setTimeout(() => {
      setClicked(false);
    }, 500); // Adjust the timeout value to control the animation duration
  };
  return (
    <nav className="bg-blue-500 p-4 w-full top-0 sticky z-10">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl">
            Collage Star
          </Link>

          {/* Mobile Menu Button (hamburger icon) */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <GiHamburgerMenu
                onClick={handleClick}
                className={`w-6 h-6 :animate-spin ${
                  clicked && "animate-spin "
                }`}
              ></GiHamburgerMenu>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLinks></NavLinks>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2  ">
            <NavLinks></NavLinks>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
