import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleDownloadCV = () => {
    // Replace 'your-cv.pdf' with your actual CV filename
    window.open("/assets/Garthi_Final.pdf", "_blank");
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold tracking-tight">
              Garthi<span className="text-accent">.</span>
            </NavLink>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-nav-link" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden h-screen bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-4 text-lg ${
                    isActive ? "text-accent font-medium" : "hover:text-accent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 w-full px-4 py-4 text-lg hover:text-accent"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
