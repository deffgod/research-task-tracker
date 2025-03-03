import React, { useRef, useEffect } from "react";

export const ChatInput = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Type a message...",
  disabled = false,
  actions,
  submitButton,
  className = "",
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Auto resize textarea based on content
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={onSubmit} className={`flex items-end gap-2 ${className}`}>
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          className="once-input min-h-[40px] max-h-[200px] py-2 pr-10 resize-none"
          rows={1}
        />
        {actions && (
          <div className="absolute right-2 bottom-2 flex gap-1">{actions}</div>
        )}
      </div>
      {submitButton && (
        <div className="pb-2">
          {submitButton}
        </div>
      )}
    </form>
  );
}; 