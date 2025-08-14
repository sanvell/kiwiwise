'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressBar from '@/components/ProgressBar';

export default function MarketMovementPage() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const handleAnswerChange = (question: string, value: string) => {
    setAnswers({ ...answers, [question]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <ProgressBar currentStep={4} totalSteps={9} />
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">KiwiSaver HealthCheck</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-center">Market Movement - Step 4 of 9</CardTitle>
          <CardDescription className="text-center">
            Your answers will allow us to match you to a fund you will be most comfortable with. There are no right
            or wrong answers, so just answer each question the way you feel is most like yourself.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <p className="font-semibold mb-2 leading-relaxed">Q1. What action would you take after reading these headlines?</p>
              {/* Note: Images from screenshots are not included in the code, but can be added here */}
              <RadioGroup onValueChange={(value) => handleAnswerChange('q1', value)} value={answers.q1}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lower-risk" id="q1-option-1" />
                  <Label htmlFor="q1-option-1">To be safe, I better move my money to a lower risk KiwiSaver fund.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="voluntary-contribution" id="q1-option-2" />
                  <Label htmlFor="q1-option-2">If the crash happens and I have some more money to invest, I'll make a voluntary contribution into my KiwiSaver account.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do-nothing" id="q1-option-3" />
                  <Label htmlFor="q1-option-3">Do nothing. No one can accurately predict a market crash.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="withdraw" id="q1-option-4" />
                  <Label htmlFor="q1-option-4">Withdraw all my money from KiwiSaver and keep it in the bank.</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <p className="font-semibold mb-2 leading-relaxed">Q2. How involved do you want to be in monitoring your KiwiSaver account?</p>
              <RadioGroup onValueChange={(value) => handleAnswerChange('q2', value)} value={answers.q2}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="once-a-year" id="q2-option-1" />
                  <Label htmlFor="q2-option-1">Once I trust you, I'll just leave everything up to National Capital. You give me an update once a year.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="check-regularly" id="q2-option-2" />
                  <Label htmlFor="q2-option-2">I would like to check the value of my KiwiSaver account regularly.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="contact-asap" id="q2-option-3" />
                  <Label htmlFor="q2-option-3">Contact me ASAP if my KiwiSaver fund value falls more than a couple thousand dollars.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="regular-updates" id="q2-option-4" />
                  <Label htmlFor="q2-option-4">Send me regular updates of my KiwiSaver fund value. I will then decide what I need to do.</Label>
                </div>
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="quarterly-updates" id="q2-option-5" />
                  <Label htmlFor="q2-option-5">Send me quarterly updates of my KiwiSaver fund value so I can stay updated.</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <p className="font-semibold mb-2 leading-relaxed">Q3. Which of the following best describes your level of investment knowledge?</p>
              <RadioGroup onValueChange={(value) => handleAnswerChange('q3', value)} value={answers.q3}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="q3-option-1" />
                  <Label htmlFor="q3-option-1">Beginner: I am not familiar with Investment concepts.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="knowledgeable" id="q3-option-2" />
                  <Label htmlFor="q3-option-2">Knowledgeable: I am familiar with terms such as Diversification and Volatility.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-knowledgeable" id="q3-option-3" />
                  <Label htmlFor="q3-option-3">Very Knowledgeable: I have a good understanding of terms such as Volatility, Asset Allocation and Dollar Cost Averaging.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expert" id="q3-option-4" />
                  <Label htmlFor="q3-option-4">Expert: I understand exactly how Volatility, Asset Allocation, Diversification and Dollar Cost Averaging will affect my KiwiSaver investment.</Label>
                </div>
              </RadioGroup>
            </div>

             <div>
              <p className="font-semibold mb-2 leading-relaxed">Q4. From the following statements which one would you relate to the most?</p>
              <RadioGroup onValueChange={(value) => handleAnswerChange('q4', value)} value={answers.q4}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="growth-assets" id="q4-option-1" />
                  <Label htmlFor="q4-option-1">I understand volatility and different investments and am very comfortable investing in growth assets.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="money-stresses-me" id="q4-option-2" />
                  <Label htmlFor="q4-option-2">Investing my money stresses me out. I would prefer keeping my money in the bank.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ok-short-term" id="q4-option-3" />
                  <Label htmlFor="q4-option-3">I think I'll be OK if the value of my KiwiSaver account went down a little bit in the short term.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="slow-and-steady" id="q4-option-4" />
                  <Label htmlFor="q4-option-4">I prefer a slow and steady increase in my KiwiSaver balance.</Label>
                </div>
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no-risk" id="q4-option-5" />
                  <Label htmlFor="q4-option-5">It's important for me not to stress. So I would prefer no risk in my KiwiSaver account.</Label>
                </div>
              </RadioGroup>
            </div>

             <div>
              <p className="font-semibold mb-2 leading-relaxed">Q5. What is more important to you, returns or lower ups and downs in your balance?</p>
              <RadioGroup onValueChange={(value) => handleAnswerChange('q5', value)} value={answers.q5}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="conservative" id="q5-option-1" />
                  <Label htmlFor="q5-option-1">I would prefer a Conservative fund (fewer ups and downs in KiwiSaver balance) even if it means lower returns.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="growth" id="q5-option-2" />
                  <Label htmlFor="q5-option-2">I am OK with the greater ups and downs in KiwiSaver balance expected from a Growth Fund so I can get maximum returns.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="balanced" id="q5-option-3" />
                  <Label htmlFor="q5-option-3">I would prefer a Balanced approach between returns and ups and downs in my KiwiSaver balance.</Label>
                </div>
              </RadioGroup>
            </div>

          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/kiwisaver-tool/income">
          <Button variant="outline">Back</Button>
        </Link>
        <Button variant="outline">Complete Later</Button>
        <Link href="/kiwisaver-tool/provider-selection">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}
