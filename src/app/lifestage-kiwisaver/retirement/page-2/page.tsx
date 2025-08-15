'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

export default function RetirementPage2() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/retirement/page-3');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Retirement: 2 of 3</h2>
            <CardTitle className="font-headline text-3xl">Legacy & Review</CardTitle>
            <CardDescription>Let's consider your long-term plans and how you manage your finances.</CardDescription>
            <Progress value={66} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 5 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Is charitable giving or leaving a financial legacy important to you?</Label>
                <RadioGroup name="legacy" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q5-yes" />
                        <Label htmlFor="q5-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q5-no" />
                        <Label htmlFor="q5-no">No</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unsure" id="q5-unsure" />
                        <Label htmlFor="q5-unsure">I haven't decided</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 6 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">How frequently do you review your overall financial situation?</Label>
                <Select name="reviewFrequency">
                    <SelectTrigger><SelectValue placeholder="Select frequency..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                        <SelectItem value="rarely">Rarely</SelectItem>
                    </SelectContent>
                </Select>
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
