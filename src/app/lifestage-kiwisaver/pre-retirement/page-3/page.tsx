'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

export default function PreRetirementPage3() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/pre-retirement/results');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Pre-Retirement: 3 of 3</h2>
            <CardTitle className="font-headline text-3xl">Risk Tolerance</CardTitle>
            <CardDescription>Your comfort with risk may change as retirement gets closer.</CardDescription>
            <Progress value={100} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 8 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">How comfortable are you with market volatility (ups and downs) at this stage?</Label>
                <Select name="volatilityComfort">
                    <SelectTrigger><SelectValue placeholder="Select comfort level..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="very-uncomfortable">Very uncomfortable</SelectItem>
                        <SelectItem value="somewhat-uncomfortable">Somewhat uncomfortable</SelectItem>
                        <SelectItem value="comfortable">Comfortable</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 9 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">If your portfolio lost 10-15% of its value, what would you do?</Label>
                <RadioGroup name="lossReaction" className="space-y-1 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="conservative" id="q9-conservative" />
                        <Label htmlFor="q9-conservative" className="font-normal">Shift to a more conservative fund to protect what's left.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maintain" id="q9-maintain" />
                        <Label htmlFor="q9-maintain" className="font-normal">Maintain my current strategy.</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="increase" id="q9-increase" />
                        <Label htmlFor="q9-increase" className="font-normal">Increase my exposure, seeing it as a buying opportunity.</Label>
                    </div>
                </RadioGroup>
              </div>

              {/* Question 10 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What is more important to you right now?</Label>
                <Select name="priority">
                    <SelectTrigger><SelectValue placeholder="Select priority..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="preservation">Capital Preservation (Protecting my savings)</SelectItem>
                        <SelectItem value="growth">Continued Growth (Willing to take some risks for returns)</SelectItem>
                        <SelectItem value="balanced">A balance of both</SelectItem>
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
