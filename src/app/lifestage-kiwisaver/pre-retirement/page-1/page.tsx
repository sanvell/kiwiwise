'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function PreRetirementPage1() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/lifestage-kiwisaver/pre-retirement/page-2');
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Pre-Retirement: 1 of 3</h2>
            <CardTitle className="font-headline text-3xl">Retirement Planning</CardTitle>
            <CardDescription>Let's fine-tune your strategy as you approach retirement.</CardDescription>
            <Progress value={33} className="mt-4" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What is your planned retirement age?</Label>
                <Select name="retirementAge">
                    <SelectTrigger><SelectValue placeholder="Select age range..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="<60">Younger than 60</SelectItem>
                        <SelectItem value="60-65">60 to 65</SelectItem>
                        <SelectItem value="66-70">66 to 70</SelectItem>
                        <SelectItem value=">70">Older than 70</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {/* Question 2 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">What is your desired annual income in retirement?</Label>
                <Select name="retirementIncome">
                    <SelectTrigger><SelectValue placeholder="Select income..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="<30k">Less than $30,000</SelectItem>
                        <SelectItem value="30-50k">$30,000 to $50,000</SelectItem>
                        <SelectItem value="50-80k">$50,000 to $80,000</SelectItem>
                        <SelectItem value=">80k">More than $80,000</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              
              {/* Question 3 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Do you have additional retirement savings outside of KiwiSaver?</Label>
                <RadioGroup name="additionalSavings" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q3-yes" />
                        <Label htmlFor="q3-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q3-no" />
                        <Label htmlFor="q3-no">No</Label>
                    </div>
                </RadioGroup>
                <Textarea placeholder="(Optional) Briefly describe your other savings (e.g., term deposits, shares)..." className="mt-2" />
              </div>

              {/* Question 4 */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Do you have plans to downsize or relocate in retirement?</Label>
                <RadioGroup name="downsizing" className="flex gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="q4-yes" />
                        <Label htmlFor="q4-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="q4-no" />
                        <Label htmlFor="q4-no">No</Label>
                    </div>
                </RadioGroup>
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
