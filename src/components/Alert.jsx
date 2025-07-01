import { useState, useEffect } from "react";
import { AlertCircle, Info, AlertTriangle, X } from "lucide-react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const alertVariants = {
  error: {
    icon: <AlertCircle className="w-6 h-6 text-white" />,
    gradient: "bg-gradient-to-r from-red-600 to-red-400 text-white",
  },
  warning: {
    icon: <AlertTriangle className="w-6 h-6 text-yellow-800" />,
    gradient: "bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-900",
  },
  info: {
    icon: <Info className="w-6 h-6 text-white" />,
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
  },
};

const Alert = ({ message, type = "info", autoDismiss = true, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, duration]);

  const { icon, gradient } = alertVariants[type] || alertVariants.info;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`max-w-xl mx-auto my-4 flex items-center justify-between gap-4 rounded-2xl px-6 py-4 shadow-xl ring-1 ring-white/10 backdrop-blur-sm ${gradient}`}
        >
          <div className="flex items-center gap-3">
            {icon}
            <p className="text-base md:text-lg font-medium">{message}</p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="rounded-full p-1 hover:bg-white/20 transition"
            aria-label="Close alert"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "warning", "info"]),
  autoDismiss: PropTypes.bool,
  duration: PropTypes.number,
};

export default Alert;
