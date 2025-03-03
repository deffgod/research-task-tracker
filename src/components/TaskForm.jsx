import React, { useState } from 'react';

const TaskForm = ({ addTask, onCancel, initialData, isEditing }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      description: '',
      dueDate: new Date().toISOString().split('T')[0],
      priority: 'medium',
      category: 'Literature Review',
      completed: false
    }
  );
  
  const categories = [
    'Literature Review',
    'Data Collection',
    'Data Analysis',
    'Writing',
    'Presentation',
    'Meeting',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="once-input"
          placeholder="Enter task title"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="once-input h-24 resize-none"
          placeholder="Enter task description"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1" htmlFor="dueDate">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="once-input"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1" htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="once-input"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="once-input"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm font-medium text-surface-700 dark:text-surface-300" htmlFor="completed">
          Mark as completed
        </label>
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="once-button-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="once-button"
        >
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;