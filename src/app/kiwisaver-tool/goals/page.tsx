'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import ProgressBar from '@/components/ProgressBar'; // Import the new ProgressBar component

export default function GoalsPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState(45);
  const [retirementAge, setRetirementAge] = useState(65);
  const [weeklyExpenses, setWeeklyExpenses] = useState('');
  const [customExpenses, setCustomExpenses] = useState('');

  const handleWeeklyExpensesChange = (value: string) => {
    setWeeklyExpenses(value);
    if (value !== 'Other Amount') {
      setCustomExpenses('');
    }
  };

  const handleAgeChange = (increment: number) => {
    setAge((prevAge) => Math.max(0, prevAge + increment));
  };

  const handleRetirementAgeChange = (increment: number) => {
    setRetirementAge((prevAge) => Math.max(0, prevAge + increment));
  };

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <ProgressBar currentStep={2} totalSteps={9} />
      <h1 className="text-3xl font-bold text-center mb-6">Your Retirement Goals - Step 2 of 9</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Your details</h2>
        <p className="text-gray-600 mb-4">
          We need your name, email, and phone number to provide personalized KiwiSaver advice and communicate recommendations effectively, ensuring you get the best support for your financial goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Label className="mb-2">How old are you?</Label>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => handleAgeChange(-1)}>
                -
              </Button>
              <span className="text-lg font-medium">{age}</span>
              <Button variant="outline" size="icon" onClick={() => handleAgeChange(1)}>
                +
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Label className="mb-2">What age do you plan on retiring?</Label>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => handleRetirementAgeChange(-1)}>
                -
              </Button>
              <span className="text-lg font-medium">{retirementAge}</span>
              <Button variant="outline" size="icon" onClick={() => handleRetirementAgeChange(1)}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">What do you estimate your weekly expenses to be in retirement?</h2>
        <p className="text-gray-600 mb-4">
          Use an approximate figure based on your current expenses. We will automatically calculate for inflation. If you&apos;re not able to estimate exactly what you will need in retirement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {['$750 BASIC', '$1200 COMFORT', '$1800 LUXURY'].map((option) => (
            <Button
              key={option}
              variant={weeklyExpenses === option ? 'default' : 'outline'}
              className={cn(
                'flex flex-col items-center justify-center h-24',
                weeklyExpenses === option ? 'bg-primary text-primary-foreground' : ''
              )}
              onClick={() => handleWeeklyExpensesChange(option)}
            >
              <span className="text-lg font-bold">{option.split(' ')[0]}</span>
              <span className="text-sm text-muted-foreground">{option.split(' ')[1]}</span>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={weeklyExpenses === 'Other Amount' ? 'default' : 'outline'}
            onClick={() => handleWeeklyExpensesChange('Other Amount')}
          >
            OTHER AMOUNT
          </Button>
          {weeklyExpenses === 'Other Amount' && (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">$</span>
              <Input
                type="number"
                value={customExpenses}
                onChange={(e) => setCustomExpenses(e.target.value)}
                className="w-32"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/kiwisaver-tool">Back</Link>
        </Button>
        <Button asChild>
          <Link href="/kiwisaver-tool/income">Next</Link>
        </Button>
      </div>
    </div>
  );
}
