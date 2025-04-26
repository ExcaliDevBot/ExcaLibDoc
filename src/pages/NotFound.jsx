import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-primary-900 dark:text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-primary-800 dark:text-slate-200 mb-6">Page Not Found</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-primary-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;