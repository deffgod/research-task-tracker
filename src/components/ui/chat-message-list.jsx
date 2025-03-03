import React, { useRef, useEffect } from "react";

export const ChatMessageList = ({ children, className = "" }) => {
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [children]);

  return (
    <div className={`flex flex-col overflow-y-auto ${className}`}>
      {children}
      <div ref={messagesEndRef} />
    </div>
  );
}; 