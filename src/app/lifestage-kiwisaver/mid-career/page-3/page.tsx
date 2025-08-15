'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';

export default function MidCareerPage3() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/mid-career/results');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Mid-Career: 3 of 3</h2>
            <CardTitle className="font-headline text-3xl">Risk Tolerance</CardTitle>
            <CardDescription>Let's assess how much risk you're comfortable with at this stage.</CardDescription>
            <Progress value={100} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 8 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">If your KiwiSaver balance dropped by 15-20% in a market downturn, what would your reaction be?</Label>
                 <RadioGroup name="crashReaction" className="space-y-1 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sell" id="q8-sell" />
                        <Label htmlFor="q8-sell" className="font-normal">Sell some investments to cut my losses.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hold" id="q8-hold" />
                        <Label htmlFor="q8-hold" className="font-normal">Hold my current position and wait for the market to recover.</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="invest" id="q8-invest" />
                        <Label htmlFor="q8-invest" className="font-normal">Invest more while prices are lower.</Label>
                    </div>
                </RadioGroup>
              </div>
              
              {/* Question 9 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What percentage of your overall investment portfolio is in high-risk assets (like stocks)?</Label>
                <Select name="highRiskPercentage">
                    <SelectTrigger><SelectValue placeholder="Select percentage..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="<20%">Less than 20%</SelectItem>
                        <SelectItem value="20-50%">20% to 50%</SelectItem>
                        <SelectItem value=">50%">More than 50%</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 10 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Are you willing to accept short-term losses for potentially higher long-term growth?</Label>
                <RadioGroup name="acceptLosses" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q10-yes" />
                        <Label htmlFor="q10-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q10-no" />
                        <Label htmlFor="q10-no">No</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unsure" id="q10-unsure" />
                        <Label htmlFor="q10-unsure">I'm not sure</Label>
                    </div>
                </RadioGroup>
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
