import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ trigger, items, position = 'bottom-right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getPositionClass = () => {
    switch (position) {
      case 'bottom-right':
        return 'right-0 top-full mt-2';
      case 'bottom-left':
        return 'left-0 top-full mt-2';
      case 'top-right':
        return 'right-0 bottom-full mb-2';
      case 'top-left':
        return 'left-0 bottom-full mb-2';
      default:
        return 'right-0 top-full mt-2';
    }
  };

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute z-50 w-48 animate-fade-in-down rounded-lg bg-white p-2 shadow-xl dark:bg-navy-700 ${getPositionClass()}`}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                item.danger
                  ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20'
                  : 'text-navy-700 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10'
              } ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              {item.icon && <span className="text-lg">{item.icon}</span>}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
