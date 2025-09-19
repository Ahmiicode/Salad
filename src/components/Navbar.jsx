import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, ChevronDown, ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const { cart } = useCart();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink =
    "px-2 py-2 rounded-md text-lg font-semibold flex items-center justify-between transition-colors hover:text-green-600 dark:hover:text-green-400";
  const activeLink = "text-green-700 dark:text-green-300 font-bold";

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav
        className={`sticky text-black top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-gradient-to-tr from-[#11ffbd] via-[#11ffbd] to-[#07f9b6]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24">
          {/* Left: Logo */}
          <Link to="/" className="text-4xl font-bold text-black">
            Sa<span className="text-orange-400">L</span>ads
          </Link>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
            >
              About
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
            >
              Menu
            </NavLink>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("pages")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={navLink}>
                Pages <ChevronDown size={16} className="ml-1" />
              </button>
              {openDropdown === "pages" && (
                <div className="absolute right-0 top-full bg-white shadow-lg rounded-md z-50">
                  <Link
                    to="/product/test"
                    className="block px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
                  >
                    Page 1
                  </Link>
                  <Link
                    to="/pages/page2"
                    className="block px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
                  >
                    Page 2
                  </Link>
                  <Link
                    to="/pages/page3"
                    className="block px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
                  >
                    Page 3
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("blog")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={navLink}>
                Blog <ChevronDown size={16} className="ml-1" />
              </button>
              {openDropdown === "blog" && (
                <div className="absolute right-0 top-full bg-white dark:bg-gray-800 shadow-lg rounded-md z-50">
                  <Link
                    to="/blog/post1"
                    className="block px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
                  >
                    Blog Post 1
                  </Link>
                  <Link
                    to="/blog/post2"
                    className="block px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
                  >
                    Blog Post 2
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
            >
              Contact
            </NavLink>

            {/* Cart Icon with badge */}
            <Link
              to="/addcart"
              className="relative p-2 hover:text-orange-500 dark:hover:text-orange-400"
            >
              <ShoppingCart size={20} />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu: Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleSidebar}
              className="p-2 bg-orange-400 rounded-md flex flex-col justify-between h-6 w-8"
            >
              <span className="block h-0.5 w-full bg-white"></span>
              <span className="block h-0.5 w-full bg-white"></span>
              <span className="block h-0.5 w-full bg-white"></span>
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile cart */}
            <Link
              to="/addcart"
              className="relative p-2 hover:text-orange-500 dark:hover:text-orange-400"
            >
              <ShoppingCart size={20} />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 min-h-90 w-64 bg-white  shadow-lg z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold">Menu</span>
              <button onClick={toggleSidebar}>
                <X size={24} />
              </button>
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
              onClick={toggleSidebar}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
              onClick={toggleSidebar}
            >
              About
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
              onClick={toggleSidebar}
            >
              Menu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${navLink} ${activeLink}` : navLink
              }
              onClick={toggleSidebar}
            >
              Contact
            </NavLink>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
