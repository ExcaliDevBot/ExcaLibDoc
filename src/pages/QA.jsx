import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaChevronDown, FaPlus } from 'react-icons/fa';

const qaData = [
  {
    id: 1,
    category: 'Getting Started',
    question: 'Why did we make ExcaLib?',
    answer: `After years of experience with FRC, we looked back and saw the need for a library that simplifies common tasks, and removes redundant boilerplate code, for mechanisms and hardware wrappers. ExcaLib is designed to be a comprehensive solution that allows teams to focus on building their robots without getting bogged down in low-level details.`,
    tags: ['getting started', 'introduction', 'excalib']
  },
  {
    id: 2,
    category: 'Getting Started',
    question: 'Is the library ready for use?',
    answer: `Yes, ExcaLib is ready for use! It has been tested and used by Team Excalibur #6738 in the 2025 season, competing in 5 events. While it is still evolving, it provides a solid foundation for building your robot.`,
    tags: ['getting started', 'status', 'excalib']
  },
    {
    id: 3,
    category: 'Performance',
    question: 'Why using monologue?',
    answer: `We used monologue for all the 2025 season, but we are replacing it with the built in Epilogue, this will make the installation process easier and more streamlined. Monologue is a powerful logging library that allows for flexible and efficient logging, which is essential for debugging and monitoring your robot's performance.`,
    tags: ['telemetry', 'logging', 'epilogue']
  },
];

const categories = ['All', 'Getting Started', 'Swerve Drive', 'Troubleshooting', 'Performance'];

const QA = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);

  const filteredQuestions = useMemo(() => {
    return qaData.filter(qa => {
      const matchesSearch =
        qa.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || qa.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">
          Questions & Answers
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Find answers to common questions about ExcaLib
        </p>

        <button
          onClick={() => setShowReportModal(true)}
          className="inline-flex items-center px-6 py-3 bg-secondary-600 text-primary-900 font-medium rounded-lg hover:bg-secondary-500 transition-colors"
        >
          <FaPlus className="mr-2 h-4 w-4" />
          Ask a Question
        </button>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-900 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Questions */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredQuestions.map((qa, index) => (
            <motion.div
              key={qa.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(qa.id)}
                className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors focus:outline-none"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium text-secondary-600 dark:text-secondary-800 bg-secondary-100 dark:bg-secondary-900/30 px-2 py-1 rounded-full">
                        {qa.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-primary-900 dark:text-white">
                      {qa.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedQuestion === qa.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <FaChevronDown className="h-5 w-5 text-slate-400" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedQuestion === qa.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
                      <div className="pt-6">
                        <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-sans text-sm leading-relaxed">
                          {qa.answer}
                        </pre>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {qa.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredQuestions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
              No questions found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Try different keywords or ask a new question
            </p>
            <button
              onClick={() => setShowReportModal(true)}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ask a Question
            </button>
          </motion.div>
        )}
      </div>

      {/* Report Modal */}
      <AnimatePresence>
        {showReportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowReportModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Ask a Question
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Have a question that's not answered here? Create an issue on GitHub and we'll help you out.
              </p>

              <div className="space-y-3">
                <a
                  href="https://github.com/ExcaliburFRC/ExcaLIB/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Create GitHub Issue
                </a>
                <a
                  href="https://www.chiefdelphi.com/t/introducing-excalib-a-mechanism-motor-wrappers-and-utilities-wpilibj-command-library/503814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Reply to the Cheif Delphi Thread
                </a>

                <button
                  onClick={() => setShowReportModal(false)}
                  className="w-full px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QA;