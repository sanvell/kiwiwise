'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';

export default function EarlyCareerPage3() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Save form data, calculate result
    router.push('/lifestage-kiwisaver/early-career/results');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Early Career: 3 of 3</h2>
            <CardTitle className="font-headline text-3xl">Risk Tolerance</CardTitle>
            <CardDescription>This helps us understand what kind of investment journey you'd be comfortable with.</CardDescription>
            <Progress value={100} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 7 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">How would you describe your comfort with investment risk?</Label>
                <Select name="riskTolerance">
                    <SelectTrigger><SelectValue placeholder="Select level..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="low">Low - I prefer stability and am willing to accept lower returns.</SelectItem>
                        <SelectItem value="medium">Medium - I'm open to some risk for better returns.</SelectItem>
                        <SelectItem value="high">High - I'm comfortable with significant risk for the highest possible returns.</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 8 */}
               <div className="space-y-2">
                <Label className="text-base font-semibold">If your KiwiSaver balance dropped by 20% in a year, how would you react?</Label>
                 <RadioGroup name="crashReaction" className="space-y-1 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="worried" id="q8-worried" />
                        <Label htmlFor="q8-worried" className="font-normal">I would be very worried and consider switching to a safer fund.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="concerned" id="q8-concerned" />
                        <Label htmlFor="q8-concerned" className="font-normal">I would have some concern but would likely stay put.</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="q8-comfortable" />
                        <Label htmlFor="q8-comfortable" className="font-normal">I would be comfortable, understanding it's a long-term investment.</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 9 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Would you accept more risk for potentially higher long-term returns?</Label>
                <RadioGroup name="acceptMoreRisk" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q9-yes" />
                        <Label htmlFor="q9-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q9-no" />
                        <Label htmlFor="q9-no">No</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 10 */}
               <div className="space-y-2">
                <Label className="text-base font-semibold">How long can you leave your investments without needing to access the money?</Label>
                <Select name="investmentHorizon">
                    <SelectTrigger><SelectValue placeholder="Select timeframe..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="<3">Less than 3 years</SelectItem>
                        <SelectItem value="3-10">3 to 10 years</SelectItem>
                        <SelectItem value="10+">More than 10 years</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>Back</Button>
                <Button type="submit">See My Results</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
