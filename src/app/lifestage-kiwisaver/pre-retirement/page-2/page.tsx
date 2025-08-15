'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

export default function PreRetirementPage2() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/pre-retirement/page-3');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Pre-Retirement: 2 of 3</h2>
            <CardTitle className="font-headline text-3xl">Health & Estate Planning</CardTitle>
            <CardDescription>These factors become more important as you near retirement.</CardDescription>
            <Progress value={66} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 5 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">How would you describe your current health status?</Label>
                <Select name="healthStatus">
                    <SelectTrigger><SelectValue placeholder="Select status..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 6 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Have you considered your potential long-term healthcare needs?</Label>
                <RadioGroup name="longTermCare" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q6-yes" />
                        <Label htmlFor="q6-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q6-no" />
                        <Label htmlFor="q6-no">No</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 7 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Are your will and estate planning documents up to date?</Label>
                <RadioGroup name="estatePlanning" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q7-yes" />
                        <Label htmlFor="q7-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q7-no" />
                        <Label htmlFor="q7-no">No</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-applicable" id="q7-na" />
                        <Label htmlFor="q7-na">Not Applicable</Label>
                    </div>
                </RadioGroup>
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
