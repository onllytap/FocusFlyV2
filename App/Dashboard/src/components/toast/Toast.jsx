import React, { useEffect, useState } from 'react';
import { MdCheckCircle, MdError, MdWarning, MdInfo, MdClose } from 'react-icons/md';

const Toast = ({ message, type = 'success', onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Attend la fin de l'animation
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <MdCheckCircle className="h-6 w-6 text-green-500" />;
      case 'error':
        return <MdError className="h-6 w-6 text-red-500" />;
      case 'warning':
        return <MdWarning className="h-6 w-6 text-orange-500" />;
      case 'info':
        return <MdInfo className="h-6 w-6 text-blue-500" />;
      default:
        return <MdCheckCircle className="h-6 w-6 text-green-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
    }
  };

  return (
    <div
      className={`
        flex items-center gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300
        ${getBgColor()}
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        min-w-[300px] max-w-[400px]
      `}
    >
      {getIcon()}
      <p className="flex-1 text-sm font-medium text-navy-700 dark:text-white">
        {message}
      </p>
      <button
        onClick={handleClose}
        className="rounded-lg p-1 transition-colors hover:bg-gray-200 dark:hover:bg-white/10"
      >
        <MdClose className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
};

export default Toast;
