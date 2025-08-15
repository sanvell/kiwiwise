'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

export default function RetirementPage3() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/retirement/results');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Retirement: 3 of 3</h2>
            <CardTitle className="font-headline text-3xl">Risk Tolerance</CardTitle>
            <CardDescription>Managing risk is key to ensuring your savings last throughout retirement.</CardDescription>
            <Progress value={100} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
               {/* Question 7 */}
               <div className="space-y-2">
                <Label className="text-base font-semibold">If your investments fell by 5-10% in value, what would you do?</Label>
                <RadioGroup name="lossReaction" className="space-y-1 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low-risk" id="q7-low-risk" />
                        <Label htmlFor="q7-low-risk" className="font-normal">Move everything to the lowest-risk options available.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="keep-some-growth" id="q7-keep-some" />
                        <Label htmlFor="q7-keep-some" className="font-normal">Keep some growth assets but review my overall strategy.</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-change" id="q7-no-change" />
                        <Label htmlFor="q7-no-change" className="font-normal">Make no changes, I understand markets fluctuate.</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 8 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">How important is liquidity (easy access to cash) to you now?</Label>
                <Select name="liquidity">
                    <SelectTrigger><SelectValue placeholder="Select importance..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="essential">Essential</SelectItem>
                        <SelectItem value="moderate">Moderately important</SelectItem>
                        <SelectItem value="low">Not a major concern</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 9 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Are you willing to accept lower returns for more stability and predictability?</Label>
                 <RadioGroup name="acceptLowerReturns" className="flex gap-4 pt-2">
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
