'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const debtTypes = [
    { id: 'mortgage', label: 'Mortgage' },
    { id: 'personal', label: 'Personal loans' },
    { id: 'credit-card', label: 'Credit card debt' },
    { id: 'other', label: 'Other' },
    { id: 'none', label: 'None' },
];

export default function MidCareerPage1() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/mid-career/page-2');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Mid-Career: 1 of 3</h2>
            <CardTitle className="font-headline text-3xl">Major Life Events & Planning</CardTitle>
            <CardDescription>Let's look at your bigger financial picture and future plans.</CardDescription>
            <Progress value={33} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Are you planning to purchase a home or investment property soon?</Label>
                <RadioGroup name="planningPurchase" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q1-yes" />
                        <Label htmlFor="q1-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q1-no" />
                        <Label htmlFor="q1-no">No</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 2 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Have you started saving for children’s education or other major goals?</Label>
                 <RadioGroup name="savingForGoals" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q2-yes" />
                        <Label htmlFor="q2-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q2-no" />
                        <Label htmlFor="q2-no">No</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 3 */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">What is your current debt situation? (Select all that apply)</Label>
                <div className="space-y-2">
                    {debtTypes.map((debt) => (
                         <div key={debt.id} className="flex items-center space-x-2">
                            <Checkbox id={`debt-${debt.id}`} />
                            <Label htmlFor={`debt-${debt.id}`} className="font-normal">{debt.label}</Label>
                        </div>
                    ))}
                </div>
              </div>
              
              {/* Question 4 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What are your retirement lifestyle expectations?</Label>
                <Select name="retirementExpectations">
                    <SelectTrigger><SelectValue placeholder="Select lifestyle..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="modest">A modest but comfortable lifestyle.</SelectItem>
                        <SelectItem value="comfortable">A comfortable lifestyle with some travel.</SelectItem>
                        <SelectItem value="luxury">A luxury lifestyle with extensive travel and hobbies.</SelectItem>
                    </SelectContent>
                </Select>
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
