import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FaChevronDown, FaChevronRight} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';

const docSections = [
    {
        title: 'Getting Started',
        items: [
            {title: 'Introduction', url: '/docs'},
            {title: 'Installation', url: '/docs/installation'},
            {title: 'Quick Start', url: '/docs/quick-start'},
        ]
    },
    {
        title: 'Wrappers',
        items: [
            {title: 'Overview', url: '/docs/wrappers'},
            {title: 'Motor Wrapper', url: '/docs/wrappers/motors'},
            {title: 'Physics Wrappers', url: '/docs/wrappers/physics'},
            {title: 'IMU Wrappers', url: '/docs/wrappers/imu'},
            {title: 'Sysid Implantation', url: '/docs/wrappers/sysid'},
        ]
    }, {
        title: 'Utilities',
        items: [
            {title: 'Overview', url: '/docs/utils'},
            {title: 'Soft Limits', url: '/docs/utils/soft-limits'},
            {title: 'Gains', url: '/docs/utils/gains'},
            {title: 'Alliance Utilities', url: '/docs/utils/alliance'},
            {title: 'Math Utilities', url: '/docs/utils/math'},
        ]
    },
    {
        title: 'Mechanisms',
        items: [
            {title: 'Overview', url: '/docs/mechanisms'},
            {title: 'Generic Mechanism', url: '/docs/mechanisms/mechanism'},
            {title: 'Arm Mechanism', url: '/docs/mechanisms/arm'},
            {title: 'Linear Mechanism', url: '/docs/mechanisms/linear'},
            {title: 'FlyWheel Mechanism', url: '/docs/mechanisms/flywheel'},
            {title: 'Turret Mechanism', url: '/docs/mechanisms/turret'},
        ]
    },
    {
        title: 'Swerve',
        items: [
            {title: 'Overview', url: '/docs/swerve'},
            {title: 'SwerveModule Class', url: '/docs/swerve/module'},
            {title: 'SwerveDrive Class', url: '/docs/swerve/drive'},
            {title: 'Path Following', url: '/docs/swerve/path-following'},
            {title: 'Custom Kinematics', url: '/docs/swerve/kinematics'},
        ]
    },
    {
        title: 'Advanced Features',
        items: [
            {title: 'Pose Estimation', url: '/docs/advanced/pose-estimation'},
            {title: 'Auto-balancing', url: '/docs/advanced/auto-balance'},
            {title: 'Vision Integration', url: '/docs/advanced/vision'},
            {title: 'Command-Based Framework', url: '/docs/advanced/command-based'},
        ]
    }
];

const Sidebar = () => {
    const [expandedSections, setExpandedSections] = useState({});
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Expand sections based on current path
        const newExpandedSections = {};

        docSections.forEach((section, index) => {
            const hasActiveItem = section.items.some(item =>
                location.pathname === item.url || location.pathname.startsWith(`${item.url}/`)
            );

            if (hasActiveItem) {
                newExpandedSections[index] = true;
            }
        });

        setExpandedSections(newExpandedSections);
    }, [location.pathname]);

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleMobileSidebar = () => {
        setMobileOpen(prev => !prev);
    };

    // Close mobile sidebar on path change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className="hidden lg:block w-64 fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white dark:bg-slate-800 shadow-md z-40 border-r border-slate-200 dark:border-slate-700 overflow-y-auto">
                <SidebarContent
                    expandedSections={expandedSections}
                    toggleSection={toggleSection}
                    currentPath={location.pathname}
                />
            </aside>

            {/* Mobile Sidebar Toggle Button */}
            <button
                type="button"
                onClick={toggleMobileSidebar}
                className="lg:hidden fixed z-50 bottom-4 right-4 p-3 rounded-full bg-primary-600 text-white shadow-lg"
                aria-label="Toggle Documentation Navigation"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        onClick={toggleMobileSidebar}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.aside
                        initial={{x: "-100%"}}
                        animate={{x: 0}}
                        exit={{x: "-100%"}}
                        transition={{type: "spring", bounce: 0, duration: 0.4}}
                        className="lg:hidden fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-slate-800 shadow-lg z-40 border-r border-slate-200 dark:border-slate-700 overflow-y-auto"
                    >
                        <SidebarContent
                            expandedSections={expandedSections}
                            toggleSection={toggleSection}
                            currentPath={location.pathname}
                        />
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
};

const SidebarContent = ({expandedSections, toggleSection, currentPath}) => {
    return (
        <nav className="py-6 px-4">
            {docSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6">
                    <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded"
                    >
                        <span>{section.title}</span>
                        {expandedSections[sectionIndex] ? (
                            <FaChevronDown size={12}/>
                        ) : (
                            <FaChevronRight size={12}/>
                        )}
                    </button>

                    <AnimatePresence initial={false}>
                        {expandedSections[sectionIndex] && (
                            <motion.ul
                                initial={{height: 0, opacity: 0}}
                                animate={{height: "auto", opacity: 1}}
                                exit={{height: 0, opacity: 0}}
                                transition={{duration: 0.3}}
                                className="space-y-1 overflow-hidden"
                            >
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <Link
                                            to={item.url}
                                            className={`block px-3 py-2 rounded-md text-sm ${
                                                currentPath === item.url
                                                    ? 'bg-primary-600 text-white font-medium'
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                            }`}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </nav>
    );
};

export default Sidebar;