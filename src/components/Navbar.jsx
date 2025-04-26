import { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { HiMenu, HiX, HiSearch, HiSun, HiMoon } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm'
          : location.pathname === '/' 
            ? 'bg-transparent'
            : 'bg-white dark:bg-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary-900 dark:text-white text-2xl font-bold">Exca</span>
              <span className="text-secondary-600 text-2xl font-bold ml-0.2">Lib</span>
            </Link>
            
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <NavLink to="/" label="Home" />
              <NavLink to="/docs" label="Documentation" />
              <NavLink to="/examples" label="Examples" />
              <NavLink to="/api-reference" label="API Reference" />
            </nav>
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiSearch className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search docs..." 
                className="hidden md:block w-48 pl-10 pr-3 py-2 text-sm rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isDarkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
            </button>
            
            <a 
              href="https://github.com/example/frc-library" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            
            <button
              type="button"
              onClick={handleMenuToggle}
              className="md:hidden ml-2 p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg"
          >
            <nav className="px-4 py-3 space-y-1">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/docs" label="Documentation" />
              <MobileNavLink to="/examples" label="Examples" />
              <MobileNavLink to="/api-reference" label="API Reference" />
              
              <div className="pt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search docs..." 
                  className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-medium relative ${
        isActive 
          ? 'text-primary-900 dark:text-white'
          : 'text-slate-700 dark:text-slate-300 hover:text-primary-900 dark:hover:text-white'
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-600"
          layoutId="navbar-active-indicator"
          transition={{ type: 'spring', duration: 0.5 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);
  
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive 
          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-white'
          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;