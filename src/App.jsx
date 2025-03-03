import React, { useState, useEffect } from 'react';
import { FiPlus, FiCalendar, FiClock, FiCheckCircle, FiBarChart2 } from 'react-icons/fi';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Summary from './components/Summary';
import Sidebar from './components/Sidebar';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('researchTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [activeTab, setActiveTab] = useState('today');
  const [showTaskForm, setShowTaskForm] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('researchTasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), createdAt: new Date().toISOString() }]);
    setShowTaskForm(false);
  };
  
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };
  
  const filterTasks = () => {
    const today = new Date().toDateString();
    
    switch(activeTab) {
      case 'today':
        return tasks.filter(task => new Date(task.dueDate).toDateString() === today);
      case 'upcoming':
        return tasks.filter(task => new Date(task.dueDate) > new Date());
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'all':
      default:
        return tasks;
    }
  };
  
  const completedTasksCount = tasks.filter(task => task.completed).length;
  const progressPercentage = tasks.length > 0 ? Math.round((completedTasksCount / tasks.length) * 100) : 0;
  
  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-8">
        <div className="glass p-8 min-h-[calc(100vh-4rem)] max-w-5xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Research Tracker</h1>
            <p className="text-gray-300">Track and organize your daily research tasks</p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Summary 
              totalTasks={tasks.length} 
              completedTasks={completedTasksCount} 
              progressPercentage={progressPercentage} 
            />
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <button 
                className={`px-4 py-2 rounded-lg transition ${activeTab === 'today' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('today')}
              >
                Today
              </button>
              <button 
                className={`px-4 py-2 rounded-lg transition ${activeTab === 'upcoming' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button 
                className={`px-4 py-2 rounded-lg transition ${activeTab === 'completed' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </button>
              <button 
                className={`px-4 py-2 rounded-lg transition ${activeTab === 'all' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('all')}
              >
                All Tasks
              </button>
            </div>
            
            <button 
              className="glass-button flex items-center"
              onClick={() => setShowTaskForm(true)}
            >
              <FiPlus className="mr-2" /> Add Task
            </button>
          </div>
          
          <TaskList 
            tasks={filterTasks()} 
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
          
          {showTaskForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="glass p-8 rounded-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Add New Research Task</h2>
                <TaskForm 
                  addTask={addTask} 
                  onCancel={() => setShowTaskForm(false)} 
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;