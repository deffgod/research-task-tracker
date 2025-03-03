import React, { useState } from 'react';
import { FiX, FiHelpCircle } from 'react-icons/fi';
import { FaqAccordion } from './ui/faq-chat-accordion';

const faqData = [
  {
    id: 1,
    question: "How do I create a new research task?",
    answer: "Click on the 'Add Task' button in the top right corner of the main interface. Fill out the task details including title, description, due date, priority, and category, then click 'Add Task'.",
    icon: "📝",
    iconPosition: "left"
  },
  {
    id: 2,
    question: "How do I mark a task as completed?",
    answer: "Click the checkbox next to any task to mark it as completed. You can also find all your completed tasks by clicking on the 'Completed' tab in the sidebar.",
    icon: "✅",
    iconPosition: "left"
  },
  {
    id: 3,
    question: "Can I edit a task after creating it?",
    answer: "Yes, click the edit (pencil) icon on any task to modify its details. You can update the title, description, due date, priority, and category.",
  },
  {
    id: 4,
    question: "How can I filter my tasks?",
    answer: "Use the tabs at the top of the task list to filter by 'Today', 'Upcoming', 'Completed', or 'All Tasks'. You can also organize by categories using the sidebar.",
    icon: "🔍",
    iconPosition: "right"
  },
  {
    id: 5,
    question: "Is my data saved automatically?",
    answer: "Yes, all your tasks are automatically saved to your browser's local storage. They will persist even if you close your browser or refresh the page.",
  },
  {
    id: 6,
    question: "How do I use the Research Assistant?",
    answer: "Click the brain icon in the bottom right corner to open the Research Assistant chat. You can ask questions about task organization, research methods, or get help with using the application.",
    icon: "🧠",
    iconPosition: "left"
  },
  {
    id: 7,
    question: "Can I switch between light and dark mode?",
    answer: "Yes, click the sun/moon icon in the top right corner of the application to toggle between light and dark mode. Your preference will be saved for future sessions.",
  }
];

const HelpSection = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-surface-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="once-panel w-full max-w-2xl max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FiHelpCircle className="text-brand-500 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Help Center</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-once-full bg-surface-100 dark:bg-surface-800 text-surface-500 hover:text-surface-900 dark:hover:text-white transition-colors"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-surface-700 dark:text-surface-300 mb-4">
            Welcome to the Research Task Tracker help center! Here you'll find answers to common questions about using the application.
          </p>
          <p className="text-surface-700 dark:text-surface-300">
            If you can't find what you're looking for, try asking our Research Assistant by clicking the brain icon in the bottom right corner.
          </p>
        </div>
        
        <FaqAccordion 
          data={faqData} 
          timestamp="Last updated: April 2023"
        />
        
        <div className="mt-6 text-center">
          <p className="text-surface-500 dark:text-surface-400 text-sm">
            Still have questions? Contact us at support@researchtracker.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection; 