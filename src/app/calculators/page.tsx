'use client'

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PiggyBank, Home, Percent, BarChart } from 'lucide-react';

// A simple formatter for currency
const currencyFormatter = new Intl.NumberFormat('en-NZ', {
  style: 'currency',
  currency: 'NZD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [contribution, setContribution] = useState(8); // percentage
  const [salary, setSalary] = useState(75000);
  const [fundReturn, setFundReturn] = useState(5); // percentage
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    let balance = currentBalance;
    const yearsToRetire = retirementAge - currentAge;
    const annualContribution = salary * (contribution / 100);

    for (let i = 0; i < yearsToRetire; i++) {
        balance += annualContribution;
        balance *= (1 + fundReturn / 100);
    }
    setResult(balance);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">KiwiSaver Retirement Calculator</CardTitle>
        <CardDescription>Project your potential KiwiSaver balance at retirement.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
         <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label>Current Age: {currentAge}</Label>
                <Slider value={[currentAge]} onValueChange={(v) => setCurrentAge(v[0])} min={18} max={64} />
            </div>
            <div className="space-y-2">
                <Label>Retirement Age: {retirementAge}</Label>
                <Slider value={[retirementAge]} onValueChange={(v) => setRetirementAge(v[0])} min={currentAge + 1} max={75} />
            </div>
             <div className="space-y-2">
                <Label htmlFor="current-balance">Current KiwiSaver Balance</Label>
                <Input id="current-balance" type="number" value={currentBalance} onChange={e => setCurrentBalance(Number(e.target.value))} placeholder="e.g. 50000" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="salary">Annual Salary (before tax)</Label>
                <Input id="salary" type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} placeholder="e.g. 75000" />
            </div>
             <div className="space-y-2">
                <Label>Your Contribution Rate</Label>
                 <Select value={String(contribution)} onValueChange={v => setContribution(Number(v))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="3">3%</SelectItem>
                        <SelectItem value="4">4%</SelectItem>
                        <SelectItem value="6">6%</SelectItem>
                        <SelectItem value="8">8%</SelectItem>
                        <SelectItem value="10">10%</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <Label>Assumed Annual Fund Return: {fundReturn}%</Label>
                <Slider value={[fundReturn]} onValueChange={(v) => setFundReturn(v[0])} min={1} max={12} step={0.5} />
            </div>
        </div>
        <Button onClick={calculate} className="w-full">Calculate Projection</Button>
        {result !== null && (
            <div className="pt-6 text-center">
                <p className="text-muted-foreground">Your estimated KiwiSaver balance at age {retirementAge}:</p>
                <p className="text-4xl font-bold font-headline text-primary">{currencyFormatter.format(result)}</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function CalculatorsPage() {
  return (
    <div>
        <header className="bg-muted/50 py-24">
            <div className="container max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Financial Calculators</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Plan for your future with our easy-to-use KiwiSaver calculators.
                </p>
            </div>
        </header>

        <main className="py-16 container max-w-4xl mx-auto">
             <Tabs defaultValue="retirement" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                    <TabsTrigger value="retirement"><PiggyBank className="w-4 h-4 mr-2"/>Retirement</TabsTrigger>
                    <TabsTrigger value="first-home" disabled><Home className="w-4 h-4 mr-2"/>First Home</TabsTrigger>
                    <TabsTrigger value="fee-impact" disabled><Percent className="w-4 h-4 mr-2"/>Fee Impact</TabsTrigger>
                    <TabsTrigger value="balance-estimator" disabled><BarChart className="w-4 h-4 mr-2"/>Balance Estimator</TabsTrigger>
                </TabsList>
                <TabsContent value="retirement" className="mt-6">
                    <RetirementCalculator />
                </TabsContent>
                <TabsContent value="first-home">
                    {/* Placeholder for First Home Calculator */}
                </TabsContent>
                <TabsContent value="fee-impact">
                    {/* Placeholder for Fee Impact Calculator */}
                </TabsContent>
                <TabsContent value="balance-estimator">
                     {/* Placeholder for a different Balance Estimator */}
                </TabsContent>
            </Tabs>
            <p className="text-center text-sm text-muted-foreground mt-8">
                *These calculators are for estimation purposes only and are not financial advice. Returns are not guaranteed.
            </p>
        </main>
    </div>
  )
}
