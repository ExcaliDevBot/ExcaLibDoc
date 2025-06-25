import { motion } from 'framer-motion';
import { 
  FaRobot,
  FaCode
} from 'react-icons/fa';
import {TbEaseInOutControlPoints, TbWheel} from "react-icons/tb";
import {GiCartwheel, GiCarWheel} from "react-icons/gi";
import {LuListPlus} from "react-icons/lu";
import {PiTreeStructure} from "react-icons/pi";

const features = [
  {
    icon: <FaRobot className="h-6 w-6 text-primary-900 dark:text-secondary-500" />,
    title: 'Pre-built Mechanisms',
    description: 'Ready-to-use mechanisms including arms, elevators, intakes, and shooters that can be customized for your robot\'s specific requirements.',
  },
  {
    icon: <GiCartwheel  className="h-6 w-6 text-primary-900 dark:text-secondary-500" />,
    title: 'Custom Swerve Drive',
    description: 'Simple swerve drive implementation with tunable parameters, optimized for different robot configurations and field conditions.',
  },
  {
    icon: <TbEaseInOutControlPoints className="h-6 w-6 text-primary-900 dark:text-secondary-500" />,
    title: 'Advanced Controls',
    description: 'Control systems using PID and feed-forward gains, motion profiling, to ensure precise and smooth movement.',
  },
  {
    icon: <LuListPlus className="h-6 w-6 text-primary-900 dark:text-secondary-500" />,
    title: 'Additional Utilities',
    description: 'Generate and follow complex autonomous paths with obstacle avoidance and optimal trajectory generation.',
  },
  {
    icon: <FaCode className="h-6 w-6 text-primary-900 dark:text-secondary-500" />,
    title: 'Command-Based Framework',
    description: 'Built on WPILib\'s command-based programming to provide a structured approach to robot control and automation.',
  },
  {
    icon: <PiTreeStructure className="h-6 w-6 text-primary-900 dark:text-secondary-500" />,
    title: 'Generic Structure',
    description: 'Basic WpiLib structure with a focus on modularity and reusability, allowing teams to easily integrate and adapt components.',
  },
];

const FeatureGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="py-24 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 dark:text-white sm:text-4xl">
            Powerful Features for FRC Teams
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Accelerate your robot development with our comprehensive library
            of pre-built components and advanced controls.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-600"
            >
              <div className="h-12 w-12 rounded-md bg-secondary-100 dark:bg-primary-800 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;