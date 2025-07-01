import {useContext, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ThemeContext} from '../context/ThemeContext';
import {HiMenu, HiMoon, HiSearch, HiSun, HiX} from 'react-icons/hi';
import {FaGithub} from 'react-icons/fa';
import {AnimatePresence, motion} from 'framer-motion';
import {apiClasses} from '../data/apiData.js';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);

        const results = apiClasses?.filter((api) => {
            const queryLower = query.toLowerCase();
            return (
                api?.name?.toLowerCase().includes(queryLower) ||
                api?.package?.toLowerCase().includes(queryLower) ||
                api?.description?.toLowerCase().includes(queryLower) ||
                api?.methods?.some((method) =>
                    method?.name?.toLowerCase().includes(queryLower) ||
                    method?.signature?.toLowerCase().includes(queryLower) ||
                    method?.description?.toLowerCase().includes(queryLower) ||
                    method?.parameters?.some((param) =>
                        param?.name?.toLowerCase().includes(queryLower) ||
                        param?.type?.toLowerCase().includes(queryLower) ||
                        param?.description?.toLowerCase().includes(queryLower)
                    )
                )
            );
        })?.slice(0, 6) || []; // Limit to first 6 results
        setSearchResults(results);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
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
                            <NavLink to="/" label="Home"/>
                            <NavLink to="/docs" label="Documentation"/>
                            <NavLink to="/api-reference" label="API Reference"/>
                            <NavLink to="/questions" label="Q&A"/>
                        </nav>
                    </div>

                    <div className="flex items-center">
                        <div className="pt-2">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    {searchQuery ? (
                                        <HiX
                                            className="h-5 w-5 text-slate-400 cursor-pointer"
                                            onClick={() => setSearchQuery('')}
                                        />
                                    ) : (
                                        <HiSearch className="h-5 w-5 text-slate-400"/>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search API..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                                {searchQuery && (
                                    <div
                                        className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto z-10">
                                        {searchResults?.length > 0 ? (
                                            searchResults.map((result, index) => (
                                                <div
                                                    key={index}
                                                    className="search-result-item border-b border-slate-200 dark:border-slate-700 pb-2 mb-2 last:border-none last:mb-0"
                                                >
                                                    <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                                                        {result.name}
                                                    </h3>
                                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                                        {result.description}
                                                    </p>
                                                    <div className="methods mt-2">
                                                        {result.methods?.map((method, methodIndex) => (
                                                            <div key={methodIndex} className="method-item mb-2">
                                                                <h4 className="text-md font-medium text-secondary-900 dark:text-secondary-300">
                                                                    {method.name}
                                                                </h4>
                                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                                    {method.signature}
                                                                </p>
                                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                                    {method.description}
                                                                </p>
                                                                <ul className="parameters list-disc pl-5">
                                                                    {method.parameters?.map((param, paramIndex) => (
                                                                        <li key={paramIndex}
                                                                            className="text-sm text-slate-600 dark:text-slate-400">
                                                                            <strong>{param.name}</strong> ({param.type}): {param.description}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-center text-slate-500 dark:text-slate-400">
                                                No results found.
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="ml-2 p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            {isDarkMode ? <HiSun className="h-5 w-5"/> : <HiMoon className="h-5 w-5"/>}
                        </button>

                        <a
                            href="https://github.com/ExcaliburFRC/ExcaLib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                        >
                            <FaGithub className="h-5 w-5"/>
                        </a>

                        <button
                            type="button"
                            onClick={handleMenuToggle}
                            className="md:hidden ml-2 p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            {isMenuOpen ? <HiX className="h-5 w-5"/> : <HiMenu className="h-5 w-5"/>}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg"
                    >
                        <nav className="px-4 py-3 space-y-1">
                            <MobileNavLink to="/" label="Home"/>
                            <MobileNavLink to="/docs" label="Documentation"/>
                            <MobileNavLink to="/api-reference" label="API Reference"/>
                            <MobileNavLink to="/questions" label="Q&A"/>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const NavLink = ({to, label}) => {
    const navLocation = useLocation();
    const isNavActive = navLocation.pathname === to || navLocation.pathname.startsWith(`${to}/`);

    return (
        <Link
            to={to}
            className={`px-3 py-2 text-sm font-medium relative ${
                isNavActive
                    ? 'text-primary-900 dark:text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:text-primary-900 dark:hover:text-white'
            }`}
        >
            {label}
            {isNavActive && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-600"
                    layoutId="navbar-active-indicator"
                    transition={{type: 'spring', duration: 0.5}}
                />
            )}
        </Link>
    );
};

const MobileNavLink = ({to, label}) => {
    const mobileLocation = useLocation();
    const isMobileActive = mobileLocation.pathname === to || mobileLocation.pathname.startsWith(`${to}/`);

    return (
        <Link
            to={to}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
                isMobileActive
                    ? 'bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
        >
            {label}
        </Link>
    );
};

export default Navbar;