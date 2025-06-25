import { motion } from 'framer-motion';
import {
  Construction,
  Eye,
  Cpu,
  TestTube,
  Clock,
  Lightbulb,
  Atom
} from 'lucide-react';

const ComingSoonSection = () => {
  const upcomingFeatures = [
    {
      title: "Advanced Vision Processing",
      description: "Real-time target tracking and autonomous navigation algorithms.",
      icon: Eye,
    },
    {
      title: "State Manager",
      description: "Robust state management for complex robot transitions.",
      icon: Cpu,
    },
    {
      title: "AKit Adaptation",
      description: "Physics-based simulator for hardware-free testing.",
      icon: TestTube,
    },
    {
      title: "Periodic Schedulers",
      description: "Fixed-interval task scheduling for various robot functions.",
      icon: Clock,
    },
    {
      title: "LED Support",
      description: "Built-in LED strip control for visual status feedback.",
      icon: Lightbulb,
    },
    {
      title: "Physics Models",
      description: "Pre-built mechanism models instead of custom implementations.",
      icon: Atom,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Construction className="w-12 h-12 text-secondary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Coming Soon
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Exciting features currently in development to enhance your experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-secondary-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-secondary-400 group-hover:text-secondary-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-secondary-200 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-slate-400 text-sm">
            Stay tuned for updates and release announcements
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;