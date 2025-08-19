import { useState } from "react";
import logo from '../assets/logo.svg'; // update with your logo path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
     <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  {/* Left: Logo */}
  <div className="flex-shrink-0">
    <img src={logo} alt="Logo" className="h-10 w-auto" />
  </div>

  {/* Center: Nav links */}
  <div className="hidden md:flex space-x-8 flex-1 justify-center">
    {["home", "overview","amenities" ,"layout", "location","gallery", "register", "Contact Us"].map((id) => (
      <button
        key={id}
        onClick={() =>
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        }
        className="text-gray-700 hover:text-green-600 font-semibold cursor-pointer bg-transparent border-none p-0"
      >
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </button>
    ))}
  </div>

  {/* Mobile hamburger button */}
  <div className="md:hidden">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-gray-700 hover:text-green-600 focus:outline-none text-2xl"
      aria-label="Toggle menu"
    >
      {isOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* Right: empty div to balance logo on left (optional) */}
  <div className="w-10 md:block hidden" />
</nav>



      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-md absolute top-full left-0 w-full z-40 flex flex-col items-center space-y-4 py-4">
          {["home", "overview","amenities" ,"layout", "location","gallery", "register","Contact Us"].map((id) => (
            <button
              key={id}
              onClick={() => {
                setIsOpen(false);
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gray-700 hover:text-green-600 font-semibold cursor-pointer bg-transparent border-none p-2"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
