import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
{ name: "AI Chat", path: "/chat" },
            { name: "Resume", path: "/resume" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const theme = useContext(ThemeContext);
  if (!theme) return null;

  // ✅ close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass fixed top-0 w-full z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Abhi Portfolio
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition ${
                    location.pathname === link.path
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={theme.toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition"
              >
                {theme.isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden pb-4 space-y-2"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 ${
                      location.pathname === link.path
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Theme Toggle */}
                <button
                  onClick={theme.toggleTheme}
                  className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Toggle Theme
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Spacer (prevents content hiding under fixed navbar) */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;