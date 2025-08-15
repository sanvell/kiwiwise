'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

const goals = [
    { id: 'first-home', label: 'Buying a first home' },
    { id: 'travel', label: 'Saving for travel' },
    { id: 'education', label: 'Furthering my education' },
    { id: 'other', label: 'Other' },
];

export default function EarlyCareerPage2() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Save form data to state management
    router.push('/lifestage-kiwisaver/early-career/page-3');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Early Career: 2 of 3</h2>
            <CardTitle className="font-headline text-3xl">Goals & Responsibilities</CardTitle>
            <CardDescription>Understanding your goals helps us tailor our advice.</CardDescription>
            <Progress value={66} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 5 */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">What are your primary financial goals? (Select all that apply)</Label>
                <div className="space-y-2">
                    {goals.map((goal) => (
                         <div key={goal.id} className="flex items-center space-x-2">
                            <Checkbox id={`goal-${goal.id}`} />
                            <Label htmlFor={`goal-${goal.id}`} className="font-normal">{goal.label}</Label>
                        </div>
                    ))}
                </div>
              </div>

              {/* Question 6 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Do you have dependents or other significant financial responsibilities?</Label>
                <RadioGroup name="hasDependents" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q6-yes" />
                        <Label htmlFor="q6-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q6-no" />
                        <Label htmlFor="q6-no">No</Label>
                    </div>
                </RadioGroup>
                <Textarea placeholder="(Optional) Briefly describe..." className="mt-2" />
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>Back</Button>
                <Button type="submit">Next Step</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
