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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

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

function FirstHomeCalculator() {
    const [currentBalance, setCurrentBalance] = useState(20000);
    const [salary, setSalary] = useState(60000);
    const [contribution, setContribution] = useState(4);
    const [fundReturn, setFundReturn] = useState(4);
    const [depositGoal, setDepositGoal] = useState(100000);
    const [result, setResult] = useState<{years: number, finalBalance: number} | null>(null);

    const calculate = () => {
        let balance = currentBalance;
        const annualContribution = salary * (contribution / 100) + (salary * 0.03); // Your + Employer 3%
        let years = 0;
        
        while (balance < depositGoal) {
            balance += annualContribution;
            balance *= (1 + fundReturn / 100);
            years++;
            if (years > 50) break; // Safety break
        }
        setResult({ years, finalBalance: balance });
    };

    const withdrawableAmount = result ? Math.max(0, result.finalBalance - 1000) : 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">First Home Deposit Calculator</CardTitle>
                <CardDescription>Estimate how long it will take to save for a home deposit.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="fh-current-balance">Current KiwiSaver Balance</Label>
                        <Input id="fh-current-balance" type="number" value={currentBalance} onChange={e => setCurrentBalance(Number(e.target.value))} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fh-salary">Annual Salary</Label>
                        <Input id="fh-salary" type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} />
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
                     <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="fh-deposit-goal">Home Deposit Goal</Label>
                        <Input id="fh-deposit-goal" type="number" value={depositGoal} onChange={e => setDepositGoal(Number(e.target.value))} />
                    </div>
                </div>
                <Button onClick={calculate} className="w-full">Calculate Time to Deposit</Button>
                {result && (
                    <div className="pt-6 text-center">
                        <p className="text-muted-foreground">It could take you approximately <span className="font-bold text-primary">{result.years} years</span> to reach your goal.</p>
                        <p className="text-2xl font-bold font-headline text-primary mt-2">
                            Estimated withdrawable amount: {currencyFormatter.format(withdrawableAmount)}
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

function FeeImpactCalculator() {
    const [balance, setBalance] = useState(50000);
    const [annualContribution, setAnnualContribution] = useState(5000);
    const [fundReturn, setFundReturn] = useState(5);
    const [years, setYears] = useState(20);
    const [fee1, setFee1] = useState(0.5);
    const [fee2, setFee2] = useState(1.5);
    const [result, setResult] = useState<{ data: any[], feeDiff: number } | null>(null);

    const calculate = () => {
        const data = [];
        let balance1 = balance;
        let balance2 = balance;
        let totalFees1 = 0;
        let totalFees2 = 0;

        for (let i = 1; i <= years; i++) {
            const feesPaid1 = balance1 * (fee1 / 100);
            totalFees1 += feesPaid1;
            balance1 += annualContribution;
            balance1 *= (1 + fundReturn / 100);
            balance1 -= feesPaid1;
            
            const feesPaid2 = balance2 * (fee2 / 100);
            totalFees2 += feesPaid2;
            balance2 += annualContribution;
            balance2 *= (1 + fundReturn / 100);
            balance2 -= feesPaid2;

            data.push({
                year: `Year ${i}`,
                fund1: balance1,
                fund2: balance2,
            });
        }
        setResult({ data, feeDiff: totalFees2 - totalFees1 });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Fee Impact Calculator</CardTitle>
                <CardDescription>See how much of a difference fees can make to your long-term balance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     <div className="space-y-2">
                        <Label htmlFor="fi-balance">Starting Balance</Label>
                        <Input id="fi-balance" type="number" value={balance} onChange={e => setBalance(Number(e.target.value))} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="fi-contribution">Annual Contribution</Label>
                        <Input id="fi-contribution" type="number" value={annualContribution} onChange={e => setAnnualContribution(Number(e.target.value))} />
                    </div>
                    <div className="space-y-2">
                        <Label>Investment Period: {years} years</Label>
                        <Slider value={[years]} onValueChange={v => setYears(v[0])} min={5} max={40} />
                    </div>
                    <div className="space-y-2">
                        <Label>Assumed Return: {fundReturn}%</Label>
                        <Slider value={[fundReturn]} onValueChange={v => setFundReturn(v[0])} min={1} max={10} step={0.5} />
                    </div>
                     <div className="space-y-2">
                        <Label>Fund 1 Annual Fee: {fee1}%</Label>
                        <Slider value={[fee1]} onValueChange={v => setFee1(v[0])} min={0.1} max={3} step={0.05} />
                    </div>
                     <div className="space-y-2">
                        <Label>Fund 2 Annual Fee: {fee2}%</Label>
                        <Slider value={[fee2]} onValueChange={v => setFee2(v[0])} min={0.1} max={3} step={0.05} />
                    </div>
                </div>
                 <Button onClick={calculate} className="w-full">Calculate Fee Impact</Button>
                 {result && (
                     <div className="pt-6 text-center">
                         <p className="text-muted-foreground">After {years} years, the lower fee could save you:</p>
                         <p className="text-4xl font-bold font-headline text-primary">{currencyFormatter.format(result.feeDiff)}</p>
                          <div className="w-full h-80 mt-6">
                             <ResponsiveContainer>
                                 <LineChart data={result.data}>
                                     <CartesianGrid strokeDasharray="3 3" />
                                     <XAxis dataKey="year" />
                                     <YAxis tickFormatter={(val) => currencyFormatter.format(val as number)} />
                                     <Tooltip formatter={(val) => currencyFormatter.format(val as number)} />
                                     <Legend />
                                     <Line type="monotone" dataKey="fund1" name={`Fund 1 (${fee1}%)`} stroke="hsl(var(--chart-1))" />
                                     <Line type="monotone" dataKey="fund2" name={`Fund 2 (${fee2}%)`} stroke="hsl(var(--chart-4))" />
                                 </LineChart>
                             </ResponsiveContainer>
                         </div>
                     </div>
                 )}
            </CardContent>
        </Card>
    );
}

function BalanceEstimator() {
    const [balance, setBalance] = useState(25000);
    const [annualContribution, setAnnualContribution] = useState(4000);
    const [fundReturn, setFundReturn] = useState(5);
    const [years, setYears] = useState(10);
    const [result, setResult] = useState<{ data: any[], finalBalance: number } | null>(null);

    const calculate = () => {
        const data = [];
        let currentBalance = balance;

        for (let i = 1; i <= years; i++) {
            currentBalance += annualContribution;
            currentBalance *= (1 + fundReturn / 100);
            data.push({
                year: `Year ${i}`,
                balance: currentBalance,
            });
        }
        setResult({ data, finalBalance: currentBalance });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Future Balance Estimator</CardTitle>
                <CardDescription>A general tool to estimate your future balance based on different scenarios.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <Label htmlFor="be-balance">Starting Balance</Label>
                        <Input id="be-balance" type="number" value={balance} onChange={e => setBalance(Number(e.target.value))} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="be-contribution">Annual Contribution</Label>
                        <Input id="be-contribution" type="number" value={annualContribution} onChange={e => setAnnualContribution(Number(e.target.value))} />
                    </div>
                    <div className="space-y-2">
                        <Label>Investment Period: {years} years</Label>
                        <Slider value={[years]} onValueChange={v => setYears(v[0])} min={1} max={50} />
                    </div>
                    <div className="space-y-2">
                        <Label>Assumed Annual Return: {fundReturn}%</Label>
                        <Slider value={[fundReturn]} onValueChange={v => setFundReturn(v[0])} min={1} max={12} step={0.5} />
                    </div>
                </div>
                 <Button onClick={calculate} className="w-full">Estimate Balance</Button>
                 {result && (
                     <div className="pt-6 text-center">
                         <p className="text-muted-foreground">After {years} years, your estimated balance will be:</p>
                         <p className="text-4xl font-bold font-headline text-primary">{currencyFormatter.format(result.finalBalance)}</p>
                         <div className="w-full h-80 mt-6">
                             <ResponsiveContainer>
                                 <LineChart data={result.data}>
                                     <CartesianGrid strokeDasharray="3 3" />
                                     <XAxis dataKey="year" />
                                     <YAxis tickFormatter={(val) => currencyFormatter.format(val as number)} />
                                     <Tooltip formatter={(val) => currencyFormatter.format(val as number)} />
                                     <Legend />
                                     <Line type="monotone" dataKey="balance" name="Projected Balance" stroke="hsl(var(--chart-1))" />
                                 </LineChart>
                             </ResponsiveContainer>
                         </div>
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
                    <TabsTrigger value="first-home"><Home className="w-4 h-4 mr-2"/>First Home</TabsTrigger>
                    <TabsTrigger value="fee-impact"><Percent className="w-4 h-4 mr-2"/>Fee Impact</TabsTrigger>
                    <TabsTrigger value="balance-estimator"><BarChart className="w-4 h-4 mr-2"/>Balance Estimator</TabsTrigger>
                </TabsList>
                <TabsContent value="retirement" className="mt-6">
                    <RetirementCalculator />
                </TabsContent>
                <TabsContent value="first-home" className="mt-6">
                    <FirstHomeCalculator />
                </TabsContent>
                <TabsContent value="fee-impact" className="mt-6">
                    <FeeImpactCalculator />
                </TabsContent>
                <TabsContent value="balance-estimator" className="mt-6">
                    <BalanceEstimator />
                </TabsContent>
            </Tabs>
            <p className="text-center text-sm text-muted-foreground mt-8">
                *These calculators are for estimation purposes only and are not financial advice. Returns are not guaranteed.
            </p>
        </main>
    </div>
  )
}
