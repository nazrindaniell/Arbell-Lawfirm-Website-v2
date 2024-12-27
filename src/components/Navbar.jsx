import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Arbell_Logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="border-b border-b-orange py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-32">
            <Link to="/">
              <img
                src={logo}
                alt="Arbell Logo"
                className="w-full object-center"
              />
            </Link>
          </div>
          <div className="hidden justify-between gap-5 md:flex">
            <Link exact="true" to="/about">
              About Us
            </Link>
            <Link to="/lawyers">Our Lawyers</Link>
          </div>
          <div className="contact-btn hidden md:block">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 flex flex-col items-center gap-5 md:hidden">
            <Link exact="true" to="/about" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/lawyers" onClick={toggleMenu}>
              Our Lawyers
            </Link>
            <Link to="/contact" className="contact-btn" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
