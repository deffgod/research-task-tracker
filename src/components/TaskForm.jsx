import React, { useState } from 'react';

const TaskForm = ({ addTask, onCancel, initialData = {}, isEditing = false }) => {
  const [task, setTask] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    dueDate: initialData.dueDate || new Date().toISOString().split('T')[0],
    priority: initialData.priority || 'medium',
    category: initialData.category || 'General',
    completed: initialData.completed || false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    addTask(task);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
            Task Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="glass-input"
            placeholder="Enter task title"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="glass-input min-h-24"
            placeholder="Enter task description"
            rows={4}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300 mb-1">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="glass-input"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-1">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="glass-input"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={task.category}
            onChange={handleChange}
            className="glass-input"
          >
            <option value="General">General</option>
            <option value="Literature Review">Literature Review</option>
            <option value="Data Collection">Data Collection</option>
            <option value="Analysis">Analysis</option>
            <option value="Writing">Writing</option>
            <option value="Meetings">Meetings</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-300 hover:text-white transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="glass-button"
        >
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;