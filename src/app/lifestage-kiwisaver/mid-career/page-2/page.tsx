'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';

export default function MidCareerPage2() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/mid-career/page-3');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Mid-Career: 2 of 3</h2>
            <CardTitle className="font-headline text-3xl">KiwiSaver Contributions & Fund Review</CardTitle>
            <CardDescription>Let's review how you're currently managing your KiwiSaver.</CardDescription>
            <Progress value={66} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Question 5 */}
                <div className="space-y-2">
                    <Label className="text-base font-semibold">Are you currently contributing the maximum amount you can to your KiwiSaver?</Label>
                    <RadioGroup name="maxContribution" className="flex gap-4 pt-2">
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
                            <Label htmlFor="q5-unsure">I'm not sure</Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Question 6 */}
                <div className="space-y-2">
                    <Label className="text-base font-semibold">Have you reviewed your fund's performance in the last 12 months?</Label>
                     <RadioGroup name="reviewedPerformance" className="flex gap-4 pt-2">
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
                    <Label className="text-base font-semibold">Are you considering changing your provider or fund type?</Label>
                     <RadioGroup name="consideringChange" className="flex gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="q7-yes" />
                            <Label htmlFor="q7-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="q7-no" />
                            <Label htmlFor="q7-no">No</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <RadioGroupItem value="unsure" id="q7-unsure" />
                            <Label htmlFor="q7-unsure">I'm not sure</Label>
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
