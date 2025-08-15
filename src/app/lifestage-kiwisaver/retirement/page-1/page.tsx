'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const incomeSources = [
    { id: 'kiwisaver', label: 'KiwiSaver Withdrawals' },
    { id: 'pension', label: 'NZ Superannuation / Pension' },
    { id: 'investments', label: 'Other Investments' },
    { id: 'part-time', label: 'Part-time Work' },
    { id: 'other', label: 'Other' },
];

export default function RetirementPage1() {
  const router = useRouter();
  const [withdrawing, setWithdrawing] = useState<string | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/retirement/page-2');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Retirement: 1 of 3</h2>
            <CardTitle className="font-headline text-3xl">Income & Expenses</CardTitle>
            <CardDescription>Let's review your financial situation in retirement.</CardDescription>
            <Progress value={33} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">What are your current retirement income sources? (Select all that apply)</Label>
                <div className="space-y-2">
                    {incomeSources.map((source) => (
                         <div key={source.id} className="flex items-center space-x-2">
                            <Checkbox id={`source-${source.id}`} />
                            <Label htmlFor={`source-${source.id}`} className="font-normal">{source.label}</Label>
                        </div>
                    ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Are you currently withdrawing funds from your KiwiSaver?</Label>
                <RadioGroup name="isWithdrawing" onValueChange={setWithdrawing} className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q2-yes" />
                        <Label htmlFor="q2-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q2-no" />
                        <Label htmlFor="q2-no">No</Label>
                    </div>
                </RadioGroup>
                 {withdrawing === 'yes' && (
                    <div className="pt-2 space-y-2 animate-in fade-in duration-300">
                        <Label>At what rate?</Label>
                         <Select name="withdrawalRate">
                            <SelectTrigger><SelectValue placeholder="Select rate..." /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="regular">Regular, planned withdrawals</SelectItem>
                                <SelectItem value="lump-sum">Occasional lump sums</SelectItem>
                                <SelectItem value="none">Not currently withdrawing</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}
              </div>
              
              {/* Question 3 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What are your expected living expenses in retirement (annual)?</Label>
                <Select name="livingExpenses">
                    <SelectTrigger><SelectValue placeholder="Select expenses..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="<30k">Less than $30,000</SelectItem>
                        <SelectItem value="30-50k">$30,000 to $50,000</SelectItem>
                        <SelectItem value="50-80k">$50,000 to $80,000</SelectItem>
                        <SelectItem value=">80k">More than $80,000</SelectItem>
                    </SelectContent>
                </Select>
              </div>

               {/* Question 4 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Do you have a plan for emergencies or unexpected large expenses?</Label>
                <RadioGroup name="emergencyPlan" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q4-yes" />
                        <Label htmlFor="q4-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q4-no" />
                        <Label htmlFor="q4-no">No</Label>
                    </div>
                </RadioGroup>
              </div>

              <div className="flex justify-between pt-4">
                 <Button type="button" variant="outline" onClick={() => router.push('/lifestage-kiwisaver')}>Back to Stages</Button>
                <Button type="submit">Next Step</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
