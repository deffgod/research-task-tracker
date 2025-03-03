import React, { useState, useEffect } from "react";

export const FeatureSteps = ({
  features = [],
  title,
  autoPlayInterval = 0,
  className = "",
  imageHeight = "h-[400px]",
}) => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlayInterval || autoPlayInterval <= 0) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % features.length);
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlayInterval, features.length]);

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12 text-surface-900 dark:text-white">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Steps Navigation */}
        <div className="space-y-8 md:pr-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer transition-all duration-300 ${
                activeStep === index
                  ? "scale-105 transform"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="mb-1 flex items-center">
                <span className={`text-xs font-medium uppercase tracking-wider ${
                  activeStep === index
                    ? "text-brand-500"
                    : "text-surface-500 dark:text-surface-400"
                }`}>
                  {feature.step}
                </span>
              </div>
              
              <h3 className={`text-xl font-semibold ${
                activeStep === index
                  ? "text-surface-900 dark:text-white"
                  : "text-surface-700 dark:text-surface-300"
              }`}>
                {feature.title}
              </h3>
              
              <p className={`mt-2 ${
                activeStep === index
                  ? "text-surface-700 dark:text-surface-300"
                  : "text-surface-500 dark:text-surface-400"
              }`}>
                {feature.content}
              </p>
            </div>
          ))}
        </div>
        
        {/* Feature Image */}
        <div className="col-span-2 overflow-hidden rounded-once-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 h-full ${
                activeStep === index ? "block" : "hidden"
              }`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className={`w-full object-cover rounded-once-xl shadow-once-lg ${imageHeight}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Step Indicators */}
      <div className="flex justify-center mt-10 space-x-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`h-2 rounded-full transition-all ${
              activeStep === index
                ? "w-8 bg-brand-500"
                : "w-2 bg-surface-300 dark:bg-surface-700 hover:bg-brand-300 dark:hover:bg-brand-800"
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}; 