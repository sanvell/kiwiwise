'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function EarlyCareerPage1() {
  const router = useRouter();
  const [contributing, setContributing] = useState<string | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Save form data to state management
    router.push('/lifestage-kiwisaver/early-career/page-2');
  };
  
  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Early Career: 1 of 3</h2>
            <CardTitle className="font-headline text-3xl">Employment & Income</CardTitle>
            <CardDescription>Let's start with the basics to understand your current financial situation.</CardDescription>
            <Progress value={33} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What is your current employment status?</Label>
                <Select name="employmentStatus">
                    <SelectTrigger><SelectValue placeholder="Select status..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 2 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Are you currently contributing to KiwiSaver?</Label>
                <RadioGroup name="isContributing" onValueChange={setContributing} className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q2-yes" />
                        <Label htmlFor="q2-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q2-no" />
                        <Label htmlFor="q2-no">No</Label>
                    </div>
                </RadioGroup>
                {contributing === 'yes' && (
                    <div className="pt-2 space-y-2 animate-fade-in-up">
                        <Label>At what rate?</Label>
                         <Select name="contributionRate">
                            <SelectTrigger><SelectValue placeholder="Select rate..." /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="3">3%</SelectItem>
                                <SelectItem value="4">4%</SelectItem>
                                <SelectItem value="6">6%</SelectItem>
                                <SelectItem value="8">8%</SelectItem>
                                <SelectItem value="10">10%</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What is your monthly income range?</Label>
                 <Select name="incomeRange">
                    <SelectTrigger><SelectValue placeholder="Select range..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="<2000">&lt; $2,000</SelectItem>
                        <SelectItem value="2000-4000">$2,000 – $4,000</SelectItem>
                        <SelectItem value="4001-6000">$4,001 – $6,000</SelectItem>
                        <SelectItem value=">6000">&gt; $6,000</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 4 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Do you have student loans or significant debts?</Label>
                <RadioGroup name="hasDebt" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q4-yes" />
                        <Label htmlFor="q4-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q4-no" />
                        <Label htmlFor="q4-no">No</Label>
                    </div>
                </RadioGroup>
                 <Textarea placeholder="(Optional) Briefly describe your main debts..." className="mt-2" />
              </div>

              <div className="flex justify-between pt-4">
                 <Link href="/lifestage-kiwisaver" passHref>
                    <Button type="button" variant="outline">Back to Stages</Button>
                </Link>
                <Button type="submit">Next Step</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
