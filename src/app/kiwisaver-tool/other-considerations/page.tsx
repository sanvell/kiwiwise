'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OtherConsiderationsPage() {
  const [financialDifficulties, setFinancialDifficulties] = useState<string | undefined>(undefined);
  const [permanentMigration, setPermanentMigration] = useState<string | undefined>(undefined);
  const [nzSuperannuation, setNzSuperannuation] = useState<string | undefined>(undefined);

  // Define total steps for the progress bar (adjust X later)
  const totalSteps = 9;
  const currentStep = 8;
  const progressValue = (currentStep / totalSteps) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <Progress value={progressValue} className="w-full mb-8" />
      <h1 className="text-2xl font-bold text-center mb-6">Other Considerations - Step {currentStep} of {totalSteps}</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">EXTREME Financial Difficulties</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">Do you feel you may need to withdraw your KiwiSaver funds due to EXTREME financial difficulties in the near future?</p>
          <RadioGroup value={financialDifficulties} onValueChange={setFinancialDifficulties} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="financial-difficulties-yes" />
              <Label htmlFor="financial-difficulties-yes">YES</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="financial-difficulties-no" />
              <Label htmlFor="financial-difficulties-no">NO</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Permanent Migration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">Do you plan on permanently migrating and withdrawing your KiwiSaver funds in the next 5 years?</p>
          <RadioGroup value={permanentMigration} onValueChange={setPermanentMigration} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="migration-yes" />
              <Label htmlFor="migration-yes">YES</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="migration-no" />
              <Label htmlFor="migration-no">NO</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">NZ Superannuation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">Will you be eligible for NZ Super at retirement?</p>
          <RadioGroup value={nzSuperannuation} onValueChange={setNzSuperannuation} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="superannuation-yes" />
              <Label htmlFor="superannuation-yes">YES</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="superannuation-no" />
              <Label htmlFor="superannuation-no">NO</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/kiwisaver-tool/loans" passHref>
          <Button variant="outline">Back</Button>
        </Link>
        <Button variant="secondary">Complete Later</Button>
        <Link href="/kiwisaver-tool/review" passHref>
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}