'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar';

export default function ProviderSelectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        KiwiSaver HealthCheck
      </h1>
      <ProgressBar currentStep={5} totalSteps={9} />
      <div className="flex justify-between items-center mb-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">1</div>
          Choice
        </div>
        <div className="flex-1 h-1 bg-green-500 mx-2"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">2</div>
          Goals
        </div>
        <div className="flex-1 h-1 bg-green-500 mx-2"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">3</div>
          Income
        </div>
        <div className="flex-1 h-1 bg-green-500 mx-2"></div>
        <div className="flex flex-col items-center text-primary">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-primary font-bold">4</div>
          Preferences
        </div>
        <div className="flex-1 h-1 bg-muted-foreground mx-2"></div>
        <div className="flex flex-col items-center text-muted-foreground">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-muted-foreground">5</div>
          KiwiSaver
        </div>
        <div className="flex-1 h-1 bg-muted-foreground mx-2"></div>
        <div className="flex flex-col items-center text-muted-foreground">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-muted-foreground">6</div>
          Assets
        </div>
        <div className="flex-1 h-1 bg-muted-foreground mx-2"></div>
        <div className="flex flex-col items-center text-muted-foreground">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-muted-foreground">7</div>
          Loans
        </div>
        <div className="flex-1 h-1 bg-muted-foreground mx-2"></div>
        <div className="flex flex-col items-center text-muted-foreground">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-muted-foreground">8</div>
          Other
        </div>
        <div className="flex-1 h-1 bg-muted-foreground mx-2"></div>
        <div className="flex flex-col items-center text-muted-foreground">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-muted-foreground">9</div>
          Contact
        </div>
      </div>


      <h2 className="text-xl font-semibold text-center mb-8">Provider Selection - Step 5 of 9</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-center text-muted-foreground mb-6">
          Our team currently research and recommend from more than 100+ funds from multiple KiwiSaver
          providers in New Zealand.
          <br />
          Your answers will help us select a provider that best matches your personal preferences.
        </p>

        <div className="mb-6">
          <h3 className="font-medium mb-3">Q1. What is the most important aspect for you in choosing a KiwiSaver provider?</h3>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-start space-x-2 mb-4">
              <RadioGroupItem value="option-one" id="q1-option-one" />
              <Label htmlFor="q1-option-one" className="leading-relaxed">Environment and Social concerns (ESG) are my top priority. I do not mind paying slightly higher fees and potentially having slightly lower returns to be with an ESG focussed provider.</Label>
            </div>
            <div className="flex items-start space-x-2 mb-4">
              <RadioGroupItem value="option-two" id="q1-option-two" />
              <Label htmlFor="q1-option-two" className="leading-relaxed">Getting the best returns is my top priority. I do not mind paying slightly higher fees for the potential of getting higher returns than the market average.</Label>
            </div>
            <div className="flex items-start space-x-2 mb-4">
              <RadioGroupItem value="option-three" id="q1-option-three" />
              <Label htmlFor="q1-option-three" className="leading-relaxed">Paying low fees is my top priority.</Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="option-four" id="q1-option-four" />
              <Label htmlFor="q1-option-four" className="leading-relaxed">I don&apos;t have any particular preference. Just tell me what&apos;s the best option for me.</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-3">Q2. Is local ownership of your KiwiSaver Provider important to you?</h3>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="option-one" id="q2-option-one"/>
              <Label htmlFor="q2-option-one">Yes. I only want to be with a NZ owned provider.</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="option-two" id="q2-option-two" />
              <Label htmlFor="q2-option-two">No. It does not matter to me.</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="font-medium mb-3">Q3. Is receiving ongoing financial advice important to you?</h3>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="option-one" id="q3-option-one"/>
              <Label htmlFor="q3-option-one" className="leading-relaxed">Yes. I would like to receive ongoing personalised advice as part of my KiwiSaver fees.</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="option-two" id="q3-option-two" />
              <Label htmlFor="q3-option-two">No. I am very financially savvy and don&apos;t need advice.</Label>
            </div>
          </RadioGroup>
        </div>
      </div>


      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Link href="/kiwisaver-tool/preferences">
          <Button variant="outline" size="lg">
            &larr; BACK
          </Button>
        </Link>
        <Button variant="outline" size="lg">
          COMPLETE LATER
        </Button>
        <Link href="/kiwisaver-tool/assets">
          <Button size="lg">
            NEXT &rarr;
          </Button>
        </Link>
      </div>
    </div>
  );
}
