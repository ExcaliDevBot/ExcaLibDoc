import {useState} from 'react';
import CodeBlock from '../components/CodeBlock';
import {motion} from 'framer-motion';

const examples = [
    {
        id: 'swerve-drive',
        name: 'SwerveDriveExample',
        description: 'A complete example of a robot with swerve drive.',
        code: ``
    },
    {
        id: 'arm-mechanism',
        name: 'Arm Mechanism Example',
        description: 'Using the arm mechanism to control a robot arm with position control.',
        code: ``
    },
    {
        id: 'vision-tracking',
        name: 'Vision Tracking Example',
        description: 'Using the vision system to track and align with AprilTags.',
        code: ``
    }
];

const Examples = () => {
    const [activeExample, setActiveExample] = useState(examples[0].id);

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-primary-900 dark:text-white mb-6">
                Example Code
            </h1>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                Ready-to-use code examples to help you get started with the ExcaLib library.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <div
                        className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 p-4">
                        <h2 className="text-xl font-semibold text-primary-900 dark:text-white mb-4">
                            Examples
                        </h2>

                        <nav className="space-y-1">
                            {examples.map((example) => (
                                <button
                                    key={example.id}
                                    onClick={() => setActiveExample(example.id)}
                                    className={`w-full px-3 py-2 text-left rounded-md text-sm ${
                                        activeExample === example.id
                                            ? 'bg-primary-50 dark:bg-primary-800 text-primary-900 dark:text-white font-medium'
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    {example.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    {examples.map((example) => (
                        activeExample === example.id && (
                            <motion.div
                                key={example.id}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3}}
                            >
                                <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                                    {example.name}
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 mb-6">
                                    {example.description}
                                </p>
                                <CodeBlock language="java" title={`${example.name}.java`}>
                                    {example.code}
                                </CodeBlock>
                            </motion.div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Examples;