'use client';

import React from 'react';

// Progress Bar Component
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={stepNumber} className="flex items-center">
            {/* Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                isCurrent
                  ? 'bg-orange-500 text-white'
                  : isCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {isCompleted ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> : stepNumber}
            </div>

            {/* Connecting Line */}
            {stepNumber < totalSteps && (
              <div className={`flex-1 h-1 mx-2 ${isCompleted || isCurrent ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
