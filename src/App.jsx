import React, { useState, useEffect } from 'react';
import './styles/variables.css';
import './styles/chat.css';
import { FiPlus, FiCalendar, FiClock, FiCheckCircle, FiBarChart2, FiSun, FiMoon, FiLayout } from 'react-icons/fi';
import { createGlobalStyle } from 'styled-components';
import ThemeProvider from './theme/ThemeProvider';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Summary from './components/Summary';
import Sidebar from './components/Sidebar';
import ResearchAssistant from './components/ResearchAssistant';
import HelpSection from './components/HelpSection';
import OnboardingGuide from './components/OnboardingGuide';
import UIExamples from './components/UIExamples';
import PearlButton from './components/ui/PearlButton';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121214;
    color: #e1e1e6;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`;

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('researchTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [activeTab, setActiveTab] = useState('today');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showHelpSection, setShowHelpSection] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    return hasSeenOnboarding ? false : true;
  });
  const [showUIExamples, setShowUIExamples] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  useEffect(() => {
    localStorage.setItem('researchTasks', JSON.stringify(tasks));
  }, [tasks]);
  
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleHelpSection = () => {
    setShowHelpSection(!showHelpSection);
  };
  
  const closeOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };
  
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
  
  const toggleUIExamples = () => {
    setShowUIExamples(!showUIExamples);
  };
  
  return (
    <ThemeProvider>
      <GlobalStyle />
      <div className="flex min-h-screen bg-surface-50 dark:bg-surface-900">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onHelpClick={toggleHelpSection}
          onUIExamplesClick={toggleUIExamples}
        />
        
        <main className="flex-1 p-8">
          {showUIExamples ? (
            <UIExamples />
          ) : (
            <div className="once-panel min-h-[calc(100vh-4rem)] max-w-5xl mx-auto">
              <header className="mb-8 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold mb-2 text-surface-900 dark:text-white">Research Tracker</h1>
                  <p className="text-surface-500 dark:text-surface-400">Track and organize your daily research tasks</p>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-once-full bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white"
                  >
                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                  </button>
                </div>
              </header>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <Summary 
                  totalTasks={tasks.length} 
                  completedTasks={completedTasksCount} 
                  progressPercentage={progressPercentage} 
                />
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <button 
                    className={`px-4 py-2 rounded-once-lg transition ${activeTab === 'today' ? 'bg-brand-500 text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700'}`}
                    onClick={() => setActiveTab('today')}
                  >
                    Today
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-once-lg transition ${activeTab === 'upcoming' ? 'bg-brand-500 text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700'}`}
                    onClick={() => setActiveTab('upcoming')}
                  >
                    Upcoming
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-once-lg transition ${activeTab === 'completed' ? 'bg-brand-500 text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700'}`}
                    onClick={() => setActiveTab('completed')}
                  >
                    Completed
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-once-lg transition ${activeTab === 'all' ? 'bg-brand-500 text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700'}`}
                    onClick={() => setActiveTab('all')}
                  >
                    All Tasks
                  </button>
                </div>
                
                <AddTaskButton className="small" onClick={() => setShowTaskForm(true)}>
                  Add Task
                </AddTaskButton>
              </div>
              
              <TaskList 
                tasks={filterTasks()} 
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            </div>
          )}
          
          {showTaskForm && (
            <div className="fixed inset-0 bg-surface-900/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="once-panel w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-surface-900 dark:text-white">Add New Research Task</h2>
                <TaskForm 
                  addTask={addTask} 
                  onCancel={() => setShowTaskForm(false)} 
                />
              </div>
            </div>
          )}
        </main>
        
        <ResearchAssistant />
        
        <HelpSection 
          isOpen={showHelpSection}
          onClose={() => setShowHelpSection(false)}
        />
        
        <OnboardingGuide 
          isOpen={showOnboarding}
          onClose={closeOnboarding}
          onGetStarted={closeOnboarding}
        />
      </div>
    </ThemeProvider>
  );
};

const AddTaskButton = styled(PearlButton)`
  &.small .button .wrap {
    padding: 12px 20px;
    font-size: 14px;
  }
  
  .button .wrap p {
    gap: 8px;
  }
`;

export default App;