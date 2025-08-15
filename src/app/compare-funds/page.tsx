'use client'

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const fundData = [
    // Simplicity
    { provider: 'Simplicity', name: 'KiwiSaver Defensive Fund', type: 'Defensive', fees: 0.29, return1yr: 4.1, return3yr: 3.8, return5yr: 3.9, return10yr: 4.5, risk: 1, ethical: 'AA' },
    { provider: 'Simplicity', name: 'KiwiSaver Balanced Fund', type: 'Balanced', fees: 0.29, return1yr: 6.2, return3yr: 6.1, return5yr: 6.4, return10yr: 6.8, risk: 3, ethical: 'AA' },
    { provider: 'Simplicity', name: 'KiwiSaver Growth Fund', type: 'Growth', fees: 0.29, return1yr: 8.3, return3yr: 8.2, return5yr: 8.5, return10yr: 8.9, risk: 5, ethical: 'AA' },
    // ANZ
    { provider: 'ANZ', name: 'KiwiSaver Conservative Fund', type: 'Conservative', fees: 1.09, return1yr: 4.98, return3yr: 3.90, return5yr: 2.15, return10yr: 3.29, risk: 2, ethical: 'B' },
    { provider: 'ANZ', name: 'KiwiSaver Balanced Fund', type: 'Balanced', fees: 1.09, return1yr: 6.71, return3yr: 5.39, return5yr: 4.62, return10yr: 5.13, risk: 4, ethical: 'B' },
    { provider: 'ANZ', name: 'KiwiSaver Growth Fund', type: 'Growth', fees: 1.09, return1yr: 8.35, return3yr: 7.14, return5yr: 7.35, return10yr: 6.98, risk: 5, ethical: 'B' },
    // Generate
    { provider: 'Generate', name: 'KiwiSaver Conservative Fund', type: 'Conservative', fees: 1.27, return1yr: 4.9, return3yr: 4.8, return5yr: 5.1, return10yr: 5.4, risk: 2, ethical: 'B' },
    { provider: 'Generate', name: 'KiwiSaver Balanced Fund', type: 'Balanced', fees: 1.27, return1yr: 7.2, return3yr: 6.9, return5yr: 7.3, return10yr: 7.6, risk: 4, ethical: 'B' },
    { provider: 'Generate', name: 'KiwiSaver Growth Fund', type: 'Growth', fees: 1.27, return1yr: 9.1, return3yr: 8.7, return5yr: 9.0, return10yr: 9.3, risk: 5, ethical: 'B' },
    // Westpac
    { provider: 'Westpac', name: 'KiwiSaver Conservative Fund', type: 'Conservative', fees: 0.98, return1yr: 4.5, return3yr: 3.2, return5yr: 3.5, return10yr: 4.0, risk: 2, ethical: 'C' },
    { provider: 'Westpac', name: 'KiwiSaver Balanced Fund', type: 'Balanced', fees: 0.98, return1yr: 6.0, return3yr: 5.5, return5yr: 5.8, return10yr: 6.2, risk: 4, ethical: 'C' },
    { provider: 'Westpac', name: 'KiwiSaver Growth Fund', type: 'Growth', fees: 0.98, return1yr: 8.0, return3yr: 7.5, return5yr: 7.8, return10yr: 8.2, risk: 5, ethical: 'C' },
    // Original Data
    { provider: 'ASB', name: 'KiwiSaver Conservative Fund', type: 'Conservative', fees: 0.65, return1yr: 4.1, return3yr: 3.5, return5yr: 3.8, return10yr: 4.2, risk: 2, ethical: 'B' },
    { provider: 'Fisher Funds', name: 'KiwiSaver Two Balanced Fund', type: 'Balanced', fees: 1.21, return1yr: 7.3, return3yr: 6.8, return5yr: 7.0, return10yr: 7.5, risk: 4, ethical: 'B' },
    { provider: 'Booster', name: 'KiwiSaver Geared Growth Fund', type: 'Aggressive', fees: 1.45, return1yr: 11.2, return3yr: 10.1, return5yr: 9.8, return10yr: 10.5, risk: 6, ethical: 'C' },
    { provider: 'Milford', name: 'KiwiSaver Aggressive Fund', type: 'Aggressive', fees: 1.15, return1yr: 10.5, return3yr: 9.5, return5yr: 9.2, return10yr: 10.1, risk: 6, ethical: 'A' },
    { provider: 'Pathfinder', name: 'KiwiSaver Global Water Fund', type: 'Growth', fees: 1.35, return1yr: 9.5, return3yr: 8.5, return5yr: 8.8, return10yr: 9.1, risk: 5, ethical: 'AAA' },
];

const providers = ['All', ...Array.from(new Set(fundData.map(f => f.provider)))];
const fundTypes = ['All', 'Defensive', 'Conservative', 'Balanced', 'Growth', 'Aggressive'];

export default function CompareFundsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [providerFilter, setProviderFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');
    const [riskFilter, setRiskFilter] = useState([1, 7]);

    const filteredData = useMemo(() => {
        return fundData.filter(fund => {
            const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase()) || fund.provider.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesProvider = providerFilter === 'All' || fund.provider === providerFilter;
            const matchesType = typeFilter === 'All' || fund.type === typeFilter;
            const matchesRisk = fund.risk >= riskFilter[0] && fund.risk <= riskFilter[1];
            return matchesSearch && matchesProvider && matchesType && matchesRisk;
        });
    }, [searchTerm, providerFilter, typeFilter, riskFilter]);

    return (
        <div>
            <header className="bg-muted/50 py-24">
                <div className="container max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Compare KiwiSaver Funds</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Find the best KiwiSaver fund for your goals. Search, filter, and compare.
                    </p>
                </div>
            </header>

            <main className="py-16 container max-w-7xl mx-auto">
                <div className="p-6 mb-8 bg-card rounded-lg border shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                    <div className="lg:col-span-1">
                        <Label htmlFor="search">Search</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input id="search" placeholder="Fund or provider name..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="provider">Provider</Label>
                        <Select value={providerFilter} onValueChange={setProviderFilter}>
                            <SelectTrigger id="provider"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {providers.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Label htmlFor="fund-type">Fund Type</Label>
                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                            <SelectTrigger id="fund-type"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {fundTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                         <Label>Risk Level (1-7)</Label>
                         <div className="flex gap-2 items-center pt-2">
                             <span>{riskFilter[0]}</span>
                             <Slider
                                defaultValue={[1, 7]}
                                min={1}
                                max={7}
                                step={1}
                                value={riskFilter}
                                onValueChange={(value) => setRiskFilter(value as [number, number])}
                             />
                             <span>{riskFilter[1]}</span>
                         </div>
                    </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Provider</TableHead>
                                <TableHead>Fund Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Fees (%)</TableHead>
                                <TableHead className="text-right">1yr Return (%)</TableHead>
                                <TableHead className="text-right">3yr Return (% p.a.)</TableHead>
                                <TableHead className="text-right">5yr Return (% p.a.)</TableHead>
                                <TableHead className="text-right">10yr Return (% p.a.)</TableHead>
                                <TableHead className="text-center">Risk</TableHead>
                                <TableHead className="text-center">Ethical Rating</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length > 0 ? filteredData.map(fund => (
                                <TableRow key={`${fund.provider}-${fund.name}`}>
                                    <TableCell className="font-medium">{fund.provider}</TableCell>
                                    <TableCell>{fund.name}</TableCell>
                                    <TableCell>
                                        <Badge variant={fund.type === 'Growth' || fund.type === 'Aggressive' ? 'destructive' : fund.type === 'Balanced' ? 'default' : 'secondary'}>{fund.type}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{fund.fees.toFixed(2)}</TableCell>
                                    <TableCell className="text-right font-medium text-primary">{fund.return1yr?.toFixed(1)}</TableCell>
                                    <TableCell className="text-right">{fund.return3yr?.toFixed(1)}</TableCell>
                                    <TableCell className="text-right">{fund.return5yr?.toFixed(1)}</TableCell>
                                    <TableCell className="text-right">{fund.return10yr?.toFixed(1)}</TableCell>
                                    <TableCell className="text-center">{fund.risk}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge>{fund.ethical}</Badge>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={10} className="text-center h-24">No funds match your criteria.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    );
}
