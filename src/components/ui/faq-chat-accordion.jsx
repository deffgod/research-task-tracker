import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const FaqAccordion = ({
  data = [],
  className = "",
  questionClassName = "",
  answerClassName = "",
  timestamp,
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`w-full rounded-once-xl ${className}`}>
      {timestamp && (
        <div className="text-surface-400 dark:text-surface-500 text-xs text-right mb-2">
          {timestamp}
        </div>
      )}
      
      <div className="space-y-2">
        {data.map((item, index) => (
          <div 
            key={item.id || index} 
            className="overflow-hidden once-card"
          >
            <button
              onClick={() => toggleItem(index)}
              className={`w-full p-4 text-left flex justify-between items-center 
                ${expandedIndex === index ? 'bg-brand-50 dark:bg-brand-900/10' : ''} 
                ${questionClassName}`}
            >
              <div className="flex items-center gap-2">
                {item.icon && item.iconPosition === "left" && (
                  <span className="text-brand-500">{item.icon}</span>
                )}
                <span className="font-medium text-surface-900 dark:text-white">
                  {item.question}
                </span>
                {item.icon && item.iconPosition === "right" && (
                  <span className="text-brand-500">{item.icon}</span>
                )}
              </div>
              <span className="flex-shrink-0 text-surface-400 dark:text-surface-500">
                {expandedIndex === index ? (
                  <FiChevronUp className="h-5 w-5" />
                ) : (
                  <FiChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>
            
            {expandedIndex === index && (
              <div 
                className={`px-4 py-3 text-surface-700 dark:text-surface-300 border-t border-surface-200 dark:border-surface-800 ${answerClassName}`}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 