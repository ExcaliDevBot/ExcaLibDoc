import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-1 ${isHomePage ? '' : 'pt-16'}`}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Layout;