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
    category: 'Swerve Drive',
    question: 'Why is my swerve drive not driving straight?',
    answer: `This is usually caused by incorrect encoder offsets. Make sure to:

1. Align all wheels to point forward
2. Record the absolute encoder values
3. Set these values as offsets in your SwerveModuleConfig
4. Verify your motor directions are correct`,
    tags: ['swerve', 'encoders', 'calibration']
  },
  {
    id: 3,
    category: 'Mechanisms',
    question: 'How do I create custom preset positions for my arm mechanism?',
    answer: `You can add preset positions using the addPresetPosition method:

arm.addPresetPosition("stowed", 0.0);
arm.addPresetPosition("pickup", Math.PI / 6);
arm.addPresetPosition("score_high", Math.PI / 2);

// Use preset positions
arm.moveToPreset("score_high");`,
    tags: ['mechanisms', 'arm', 'presets']
  },
  {
    id: 4,
    category: 'Troubleshooting',
    question: 'My robot is oscillating when trying to reach target positions. How do I fix this?',
    answer: `Oscillation is typically caused by aggressive PID tuning. Try these steps:

1. Reduce the P gain - Start with a lower value and gradually increase
2. Add D gain - This helps dampen oscillations
3. Check for mechanical issues - Ensure there's no backlash or binding
4. Verify sensor noise - Use filtering if your encoder readings are noisy`,
    tags: ['pid', 'tuning', 'oscillation']
  },
  {
    id: 5,
    category: 'Vision',
    question: 'How do I integrate AprilTag detection with my swerve drive?',
    answer: `FRCLib provides seamless AprilTag integration:

// Create vision system
VisionSystem vision = new VisionSystem.Builder()
    .withCameraResolution(640, 480)
    .withAprilTagFamily(VisionSystem.AprilTagFamily.TAG_36H11)
    .build();

// Update swerve drive pose estimation
List<AprilTagDetection> detections = vision.getDetectedTags();
if (!detections.isEmpty()) {
    AprilTagDetection tag = detections.get(0);
    Pose2d robotPose = vision.estimateRobotPose(tag);
    swerveDrive.addVisionPoseMeasurement(robotPose, Timer.getFPGATimestamp());
}`,
    tags: ['vision', 'apriltag', 'pose estimation']
  },
  {
    id: 6,
    category: 'Performance',
    question: 'How can I optimize my robot\'s performance during autonomous?',
    answer: `Key optimization strategies:

Path Planning:
- Use smooth, continuous paths instead of point-to-point movements
- Optimize waypoints to minimize sharp turns
- Consider robot dynamics when generating paths

Control Tuning:
- Tune feed-forward gains for better tracking
- Use motion profiling for smooth acceleration/deceleration
- Implement proper lookahead for path following`,
    tags: ['performance', 'autonomous', 'optimization']
  },
  {
    id: 7,
    category: 'Getting Started',
    question: 'What are the minimum system requirements for FRCLib?',
    answer: `FRCLib requires:

Software Requirements:
- WPILib 2025.x.x or newer
- Java 17 or newer
- Gradle 7.x or newer

Hardware Compatibility:
- RoboRIO 2.0 (recommended) or RoboRIO 1.0
- Compatible with all major motor controllers (TalonFX, SparkMAX, etc.)
- Works with CANCoders, built-in encoders, and analog encoders`,
    tags: ['requirements', 'compatibility', 'hardware']
  },
  {
    id: 8,
    category: 'Mechanisms',
    question: 'Can I use multiple mechanisms simultaneously?',
    answer: `Absolutely! FRCLib is designed for multi-mechanism robots:

// Multiple mechanisms can coexist
private final ArmMechanism arm = new ArmMechanism.Builder()...build();
private final ElevatorMechanism elevator = new ElevatorMechanism.Builder()...build();
private final IntakeMechanism intake = new IntakeMechanism.Builder()...build();

Each mechanism operates independently with its own control loops and safety features.`,
    tags: ['mechanisms', 'multiple', 'coordination']
  }
];

const categories = ['All', 'Getting Started', 'Swerve Drive', 'Mechanisms', 'Vision', 'Troubleshooting', 'Performance'];

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
          Find answers to common questions about FRCLib
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
                  href="https://github.com/example/frc-library/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Create GitHub Issue
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