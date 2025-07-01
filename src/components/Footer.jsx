import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Documentation',
      links: [
        { text: 'Getting Started', href: '/docs' },
        { text: 'Mechanisms', href: '/docs/mechanisms' },
        { text: 'Swerve Drive', href: '/docs/swerve' },
        { text: 'API Reference', href: '/api-reference' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/ExcaliburFRC/ExcaLib', external: true },
        { text: 'Discord', href: '#', external: true },
        { text: 'Chief Delphi', href: 'https://www.chiefdelphi.com/t/introducing-excalib-a-mechanism-motor-wrappers-and-utilities-wpilibj-command-library/503814', external: true },
        { text: 'FRC Blog', href: 'https://www.firstinspires.org/robotics/frc/blog', external: true },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'WPILib Documentation', href: 'https://docs.wpilib.org/', external: true },
        { text: 'FRC Control System', href: 'https://docs.wpilib.org/en/stable/docs/software/vscode-overview/wpilib-commands-vscode.html', external: true },
        { text: 'FIRST Robotics', href: 'https://www.firstinspires.org/robotics/frc', external: true },
        { text: 'Java Tutorial', href: 'https://docs.oracle.com/javase/tutorial/', external: true },
      ],
    },
  ];
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-primary-900 dark:text-white text-2xl font-bold">Exca</span>
              <span className="text-secondary-600 dark:text-secondary-500 text-2xl font-bold">Lib</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              A powerful Java library for FRC robotics, featuring mechanisms, custom swerve drive, and advanced control systems.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
                <span className="sr-only">Discord</span>
                <FaDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-slate-600 hover:text-primary-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-sm text-slate-600 hover:text-primary-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear}  Excalibur FRC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;