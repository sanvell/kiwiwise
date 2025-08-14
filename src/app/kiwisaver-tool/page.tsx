'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';

export default function KiwisaverTool() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleGoalChange = (goal: string) => {
    setSelectedGoal(goal);

    // Navigate to the next step based on the selected goal
    if (goal === 'retirement') {
      router.push('/kiwisaver-tool/goals');
    } else if (goal === 'first-home') {
      // We will create this page later
      router.push('/kiwisaver-tool/first-home');
    } else if (goal === 'retired') {
      // We will create this page later
      router.push('/kiwisaver-tool/retired');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <ProgressBar currentStep={1} totalSteps={9} />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">KiwiSaver Tool: Step 1 of 9</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Retirement Option */}
          <div
            className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center cursor-pointer ${
              selectedGoal === 'retirement' ? 'border-2 border-green-500' : ''
            }`}
            onClick={() => handleGoalChange('retirement')}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src="/images/retirement.jpg" // Replace with actual image path
                alt="Couple walking"
                width={128}
                height={128}
                objectFit="cover"
              />
            </div>
            <p className="text-center text-lg font-semibold text-gray-700 mb-4">
              I want to use KiwiSaver for my Retirement.
            </p>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedGoal === 'retirement'
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-300'
              }`}
            >
              {selectedGoal === 'retirement' && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>

          {/* First Home Option */}
          <div
            className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center cursor-pointer ${
              selectedGoal === 'first-home' ? 'border-2 border-green-500' : ''
            }`}
            onClick={() => handleGoalChange('first-home')}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src="/images/first-home.jpg" // Replace with actual image path
                alt="Modern house interior"
                width={128}
                height={128}
                objectFit="cover"
              />
            </div>
            <p className="text-center text-lg font-semibold text-gray-700 mb-4">
              I want to use KiwiSaver to buy my First Home.
            </p>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedGoal === 'first-home'
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-300'
              }`}
            >
              {selectedGoal === 'first-home' && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>

          {/* Already Retired Option */}
          <div
            className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center cursor-pointer ${
              selectedGoal === 'retired' ? 'border-2 border-green-500' : ''
            }`}
            onClick={() => handleGoalChange('retired')}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src="/images/retired.jpg" // Replace with actual image path
                alt="Older couple looking at tablet"
                width={128}
                height={128}
                objectFit="cover"
              />
            </div>
            <p className="text-center text-lg font-semibold text-gray-700 mb-4">
              I&apos;m already retired
            </p>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedGoal === 'retired'
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-300'
              }`}
            >
              {selectedGoal === 'retired' && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Your information is 100% safe and secure. We will never sell your information and only use
          it to provide you with our services as per our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
