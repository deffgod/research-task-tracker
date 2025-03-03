import React from 'react';
import { FiCheckCircle, FiClock, FiBarChart2 } from 'react-icons/fi';

const Summary = ({ totalTasks, completedTasks, progressPercentage }) => {
  const circumference = 2 * Math.PI * 30;
  const progressOffset = circumference - (progressPercentage / 100) * circumference;
  
  return (
    <>
      <div className="glass-card p-6">
        <div className="flex items-center">
          <div className="p-3 bg-purple-600 bg-opacity-20 rounded-lg mr-4">
            <FiBarChart2 size={24} className="text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Total Tasks</h3>
            <p className="text-3xl font-bold text-white">{totalTasks}</p>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6">
        <div className="flex items-center">
          <div className="p-3 bg-green-600 bg-opacity-20 rounded-lg mr-4">
            <FiCheckCircle size={24} className="text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Completed</h3>
            <p className="text-3xl font-bold text-white">{completedTasks}</p>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6">
        <h3 className="text-lg font-medium text-white mb-4">Overall Progress</h3>
        <div className="flex justify-center">
          <div className="progress-ring">
            <svg width="64" height="64">
              <circle
                className="progress-ring__background"
                strokeWidth="6"
                fill="transparent"
                r="30"
                cx="32"
                cy="32"
              />
              <circle
                className="progress-ring__progress"
                strokeWidth="6"
                fill="transparent"
                r="30"
                cx="32"
                cy="32"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
              />
            </svg>
            <div className="progress-ring__text">
              {progressPercentage}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;