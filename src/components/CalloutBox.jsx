import {FaInfoCircle, FaExclamationTriangle, FaCheckCircle, FaLightbulb} from 'react-icons/fa';
import {CgCommunity} from "react-icons/cg";

const CalloutBox = ({type = 'info', title, children}) => {
    const getTypeConfig = () => {
        switch (type) {
            case 'warning':
                return {
                    icon: <FaExclamationTriangle className="h-5 w-5 text-amber-500"/>,
                    bgColor: 'bg-amber-50 dark:bg-amber-800',
                    borderColor: 'border-amber-200 dark:border-amber-700',
                    titleColor: 'text-amber-800 dark:text-amber-300'
                };
            case 'credit':
                return {
                    icon: <CgCommunity className="h-5 w-5 text-blue-500"/>,
                    bgColor: 'bg-blue-50 dark:bg-blue-900',
                    borderColor: 'border-blue-200 dark:border-blue-800',
                    titleColor: 'text-blue-900 dark:text-blue-300',
                    textStyle: 'font-bold',
                    descriptionStyle: 'italic'
                };
            case 'success':
                return {
                    icon: <FaCheckCircle className="h-5 w-5 text-green-500"/>,
                    bgColor: 'bg-green-50 dark:bg-green-800',
                    borderColor: 'border-green-200 dark:border-green-700',
                    titleColor: 'text-green-800 dark:text-green-300'
                };
            case 'tip':
                return {
                    icon: <FaLightbulb className="h-5 w-5 text-secondary-500"/>,
                    bgColor: 'bg-secondary-50 dark:bg-secondary-800',
                    borderColor: 'border-secondary-200 dark:border-secondary-700',
                    titleColor: 'text-secondary-800 dark:text-secondary-300'
                };
            case 'info':
            default:
                return {
                    icon: <FaInfoCircle className="h-5 w-5 text-primary-500"/>,
                    bgColor: 'bg-primary-50 dark:bg-primary-800',
                    borderColor: 'border-primary-200 dark:border-primary-700',
                    titleColor: 'text-primary-800 dark:text-primary-300'
                };
        }
    };

    const {icon, bgColor, borderColor, titleColor, textStyle = '', descriptionStyle = ''} = getTypeConfig();

    return (
        <div className={`rounded-lg p-4 mb-6 ${bgColor} border ${borderColor}`}>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    {icon}
                </div>
                <div className={`ml-3 ${type === 'credit' ? 'flex items-baseline' : ''}`}>
                    {title && type !== 'credit' && (
                        <div className={`text-sm ${textStyle} ${titleColor} mb-1`}>
                            {title}
                        </div>
                    )}
                    <div className={`${type === 'credit' ? 'flex items-baseline' : ''}`}>
                        {title && type === 'credit' && (
                            <span className={`text-sm ${textStyle} ${titleColor}`}>
                            {title}
                        </span>
                        )}
                        <span className={` text-sm ${descriptionStyle} text-slate-700 dark:text-slate-300`}>
                        {children}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalloutBox;