import React, { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";

export const ExpandableChat = ({
  children,
  size = "md",
  position = "bottom-right",
  icon,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const chatRef = useRef(null);

  // Sizes map for the chat button
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  // Positions map for the chat button
  const positions = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  // Handle clicks outside of the chat to collapse it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target) && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div className="fixed z-50" ref={chatRef}>
      {isExpanded ? (
        <div className={`fixed ${positions[position]} w-full max-w-md animate-in duration-300`}>
          <div className="once-panel overflow-hidden flex flex-col h-[500px] shadow-once-xl">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 p-2 rounded-once-full bg-surface-100 dark:bg-surface-800 text-surface-500 hover:text-surface-900 dark:hover:text-white transition-colors"
            >
              <FiX className="h-4 w-4" />
            </button>
            {children}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className={`fixed ${positions[position]} ${sizes[size]} bg-brand-500 hover:bg-brand-600 rounded-full flex items-center justify-center text-white shadow-once-lg transition-all duration-200 hover:scale-105`}
        >
          {icon}
        </button>
      )}
    </div>
  );
};

export const ExpandableChatHeader = ({ children, className }) => {
  return (
    <div className={`p-4 border-b border-surface-200 dark:border-surface-800 ${className}`}>
      {children}
    </div>
  );
};

export const ExpandableChatBody = ({ children, className }) => {
  return (
    <div className={`flex-1 overflow-y-auto p-4 ${className}`}>
      {children}
    </div>
  );
};

export const ExpandableChatFooter = ({ children, className }) => {
  return (
    <div className={`p-4 border-t border-surface-200 dark:border-surface-800 ${className}`}>
      {children}
    </div>
  );
}; 