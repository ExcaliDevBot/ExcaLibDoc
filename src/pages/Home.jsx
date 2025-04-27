import {motion} from 'framer-motion';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CodeBlock from '../components/CodeBlock';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero/>

            <FeatureGrid/>

            {/* Code Example Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.5}}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-primary-900 dark:text-white sm:text-4xl">
                                Simple to Integrate
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                                Get your robot up and running with just a few lines of code.
                                Our API is designed to be intuitive and easy to use.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-4">
                                    Elevator Mechanism Implementation
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Setting up a Subsystem Mechanism had never been easier. Define your Mechanism Type,
                                    create your mechanism, and you're ready to go. Our library handles the complex
                                    kinematics and control calculations behind the scenes.
                                </p>
                                <Link
                                    to="/docs/swerve"
                                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
                                >
                                    Learn more about Elevator Mechanism
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                                    </svg>
                                </Link>
                            </div>

                            <div>
                                <CodeBlock language="java" title="ExampleSubsystem.java">
                                    {`public class ExampleSubsystem extends SusbsystemBase {
    private final TalonFXMotor m_firstMotor, m_secondMotor;
    private final MotorGroup m_motorGroup;
    private final LinearExtension m_extensionMechanism;
    public DoubleSupplier m_heightSupplier;    
    
  public ExampleSubsystem() {
      m_firstMotor = new TalonFXMotor(FIRST_MOTOR_ID);
      m_secondMotor = new TalonFXMotor(SECOND_MOTOR_ID);
      m_motorGroup = new MotorGroup(m_firstMotor, m_secondMotor);

      m_extensionMechanism = new LinearExtension(
                m_motorGroup,
                m_heightSupplier,
                () -> ELEVATOR_ANGLE,
                ELEVATOR_GAINS,
                CONSTRAINTS,
                TOLERANCE
        );
    }
    
    public Command manualCommand(DoubleSupplier output) {
        return m_extensionMechanism.manualCommand(output, this);
    }

}`}
                                </CodeBlock>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.5}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-primary-900 dark:text-white sm:text-4xl">
                            Trusted by FRC Teams
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Our library is used by teams around the world to build championship-winning robots.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "This library saved us countless hours of development time. The swerve drive implementation is especially impressive.",
                                author: "Team 1234 - The Coders",
                                role: "World Championship Finalists"
                            },
                            {
                                quote: "The mechanism classes are so well thought out. We were able to quickly prototype different arm configurations without writing much code.",
                                author: "Team 5678 - Robo Warriors",
                                role: "Regional Winners"
                            },
                            {
                                quote: "The documentation is exceptional. Even our rookie programmers were able to understand and contribute to our robot code base.",
                                author: "Team 9101 - Binary Bots",
                                role: "Innovation in Control Award"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-600"
                            >
                                <svg className="h-12 w-12 text-secondary-400 mb-4" fill="currentColor"
                                     viewBox="0 0 32 32" aria-hidden="true">
                                    <path
                                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                </svg>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <h4 className="font-semibold text-primary-900 dark:text-white">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                            Ready to supercharge your robot?
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                            Get started with our library today and build a championship-level robot for your next
                            competition.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/docs"
                                className="rounded-md bg-secondary-600 px-5 py-3 text-base font-semibold text-primary-900 shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 transition-colors"
                            >
                                Read the Documentation
                            </Link>
                            <a
                                href="https://github.com/example/frc-library"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;