import React from "react";

export const ChatBubble = ({ children, variant = "default", className = "" }) => {
  const baseClasses = "flex gap-3 my-4";
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export const ChatBubbleAvatar = ({ children, className = "" }) => {
  return (
    <div className={`flex-shrink-0 h-10 w-10 rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const ChatBubbleMessage = ({ 
  children, 
  variant = "default", 
  isLoading = false,
  className = "" 
}) => {
  const variantClasses = {
    default: "bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white",
    primary: "bg-brand-500 text-white",
  };

  return (
    <div
      className={`relative py-2 px-4 rounded-once-lg max-w-[85%] ${variantClasses[variant]} ${className}`}
    >
      {isLoading ? (
        <MessageLoading />
      ) : (
        <div className="whitespace-pre-wrap">{children}</div>
      )}
    </div>
  );
};

const MessageLoading = () => {
  return (
    <div className="flex space-x-1 items-center py-2 px-1">
      <div className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-current rounded-full animate-bounce"></div>
    </div>
  );
}; 