import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiChevronDown, FiChevronUp, FiClock } from 'react-icons/fi';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, updateTask }) => {
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  
  const toggleExpand = (taskId) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };
  
  const startEditing = (taskId) => {
    setEditingTaskId(taskId);
  };
  
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };
  
  if (tasks.length === 0) {
    return (
      <div className="glass-card p-8 text-center">
        <p className="text-gray-300 mb-4">No tasks found</p>
        <p className="text-sm text-gray-400">Add a new task to get started with your research tracking</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="glass-card overflow-hidden">
          {editingTaskId === task.id ? (
            <div className="p-6">
              <TaskForm 
                addTask={(updatedTask) => {
                  updateTask({ ...updatedTask, id: task.id, createdAt: task.createdAt });
                  setEditingTaskId(null);
                }}
                initialData={task}
                onCancel={() => setEditingTaskId(null)}
                isEditing={true}
              />
            </div>
          ) : (
            <>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <input 
                      type="checkbox" 
                      checked={task.completed} 
                      onChange={() => toggleTaskCompletion(task.id)}
                      className="w-5 h-5 rounded-full border-2 border-purple-500 checked:bg-purple-500 transition duration-200"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                        {task.title}
                      </h3>
                      <div className="flex items-center space-x-2 ml-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)} text-white`}>
                          {task.priority}
                        </span>
                        <button 
                          onClick={() => startEditing(task.id)}
                          className="p-1 text-gray-400 hover:text-white transition"
                        >
                          <FiEdit2 size={16} />
                        </button>
                        <button 
                          onClick={() => deleteTask(task.id)}
                          className="p-1 text-gray-400 hover:text-red-400 transition"
                        >
                          <FiTrash2 size={16} />
                        </button>
                        <button 
                          onClick={() => toggleExpand(task.id)}
                          className="p-1 text-gray-400 hover:text-white transition"
                        >
                          {expandedTaskId === task.id ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center text-sm text-gray-400">
                      <FiClock className="mr-1" size={14} />
                      <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {expandedTaskId === task.id && (
                <div className="px-6 pb-6 pt-0">
                  <div className="mt-2 text-gray-300">
                    <div className="glass-card bg-opacity-30 p-4">
                      <h4 className="text-sm font-medium text-purple-400 mb-2">Description</h4>
                      <p className="text-gray-300 whitespace-pre-line">{task.description || 'No description provided.'}</p>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="glass-card bg-opacity-30 p-4">
                        <h4 className="text-sm font-medium text-purple-400 mb-2">Category</h4>
                        <p>{task.category || 'Uncategorized'}</p>
                      </div>
                      <div className="glass-card bg-opacity-30 p-4">
                        <h4 className="text-sm font-medium text-purple-400 mb-2">Created</h4>
                        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;