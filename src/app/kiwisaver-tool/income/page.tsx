'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ProgressBar from '@/components/ProgressBar';

export default function IncomePage() {
  const [annualIncome, setAnnualIncome] = useState('');
  const [includePartner, setIncludePartner] = useState<'yes' | 'no'>('no');

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <ProgressBar currentStep={3} totalSteps={9} />
        <h1 className="text-2xl font-bold mb-6 text-center">Your Annual Income - Step 3 of 9</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">What is your current annual income?</h2>
          <p className="text-sm text-gray-600 mb-4">Income BEFORE Tax and KiwiSaver deductions.</p>
          <div className="flex items-center gap-2">
            <Label htmlFor="annualIncome" className="text-lg">$</Label>
            <Input
              id="annualIncome"
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="flex-grow text-lg"
            />
          </div>
          {/* Optional: Add a warning if income seems low */}
          {/* {annualIncome !== '' && parseFloat(annualIncome) < 15000 && (
            <p className="text-orange-500 mt-2">Just checking - ${annualIncome} seems low!</p>
          )} */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">I would like to enter my partner's details too</h2>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">We can then consider your combined position in your personalised advice and diversify appropriately</p>
          <RadioGroup value={includePartner} onValueChange={setIncludePartner} className="flex justify-center gap-8">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="partner-yes" />
              <Label htmlFor="partner-yes">YES</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="partner-no" />
              <Label htmlFor="partner-no">NO</Label>
            </div>
          </RadioGroup>
        </div>


        <div className="flex justify-between mt-8">
          <Link href="/kiwisaver-tool/goals" passHref>
            <Button variant="outline">Back</Button>
          </Link>
          <Button variant="outline">Complete Later</Button>
          <Link href="/kiwisaver-tool/preferences" passHref>
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
