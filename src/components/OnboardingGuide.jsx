import React from 'react';
import { FiX } from 'react-icons/fi';
import { FeatureSteps } from './ui/feature-section';

// Sample images for features
const featureImages = {
  create: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
  organize: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop',
  track: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop',
};

const features = [
  {
    step: 'Step 1',
    title: 'Create Research Tasks',
    content: 'Start by creating detailed research tasks with titles, descriptions, due dates, and priority levels.',
    image: featureImages.create,
  },
  {
    step: 'Step 2',
    title: 'Organize Your Work',
    content: "Categorize tasks by type and use filters to focus on what matters most. View today's tasks, upcoming deadlines, or completed work.",
    image: featureImages.organize,
  },
  {
    step: 'Step 3',
    title: 'Track Your Progress',
    content: 'Monitor your research progress with visual indicators and mark tasks as completed as you finish them.',
    image: featureImages.track,
  },
];

const OnboardingGuide = ({ isOpen, onClose, onGetStarted }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-surface-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="once-panel w-full max-w-5xl p-8">
        <div className="flex justify-end mb-4">
          <button 
            onClick={onClose}
            className="p-2 rounded-once-full bg-surface-100 dark:bg-surface-800 text-surface-500 hover:text-surface-900 dark:hover:text-white transition-colors"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-surface-900 dark:text-white">
            Welcome to Research Task Tracker
          </h1>
          <p className="text-center text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Your powerful companion for organizing and tracking research work. Let's explore how to make the most of it.
          </p>
        </div>
        
        <FeatureSteps 
          features={features}
          autoPlayInterval={5000}
          imageHeight="h-[350px]"
        />
        
        <div className="mt-12 text-center">
          <button 
            onClick={onGetStarted}
            className="once-button px-8 py-3 text-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGuide; 