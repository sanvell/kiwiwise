'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Loan {
  name: string;
  interestRate: string;
  amountOwed: string;
  monthlyRepayment: string;
}

export default function LoansPage() {
  const totalSteps = 9;
  const currentStep = 7;
  const progressValue = (currentStep / totalSteps) * 100;

  const [numberOfLoans, setNumberOfLoans] = useState(0);
  const [loans, setLoans] = useState<Loan[]>([]);

  const handleNumberOfLoansChange = (change: number) => {
    setNumberOfLoans((prev) => {
      const newNumber = Math.max(0, prev + change);
      if (newNumber > prev) {
        // Add new loan objects if increasing
        const newLoans = [...loans];
        for (let i = prev; i < newNumber; i++) {
          newLoans.push({
            name: '',
            interestRate: '',
            amountOwed: '',
            monthlyRepayment: '',
          });
        }
        setLoans(newLoans);
      } else {
        // Remove loan objects if decreasing
        setLoans((prevLoans) => prevLoans.slice(0, newNumber));
      }
      return newNumber;
    });
  };

  const handleLoanInputChange = (
    index: number,
    field: keyof Loan,
    value: string
  ) => {
    setLoans((prevLoans) => {
      const newLoans = [...prevLoans];
      newLoans[index][field] = value;
      return newLoans;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Progress value={progressValue} className="w-full mb-6" />
      <div className="flex items-center justify-center space-x-2 mb-8">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${
              index + 1 <= currentStep
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">
        Loans - Step {currentStep} of {totalSteps}
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-center text-gray-600 mb-4">
          When entering number of loans, please take into consideration all
          types of debt and loans you may have. This may include your home
          mortgage and any rental property mortgages. It may also include any
          credit card debt or personal loans. However, if you pay off your
          credit card in full each month, then do not count it as a loan.
        </p>
        <p className="text-center text-gray-600 mb-4">
          For each loan start by giving it a name just for our reference. Then
          add the amount you owe, what interest rate you are being charged and
          your monthly repayment. This will allow us to calculate how soon your
          loan will be paid off.
        </p>
        <p className="text-center text-gray-600">
          Remember, National Capital cannot give you advice on how to structure
          your loans or repay them. We only use this information to estimate
          your net worth at retirement, and give you KiwiSaver advice based on
          that.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <Label htmlFor="number-of-loans" className="text-lg font-semibold">
          How many loans do you have?
        </Label>
        <div className="flex items-center mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNumberOfLoansChange(-1)}
          >
            -
          </Button>
          <Input
            id="number-of-loans"
            type="number"
            value={numberOfLoans}
            readOnly
            className="w-20 text-center mx-2"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNumberOfLoansChange(1)}
          >
            +
          </Button>
        </div>
      </div>

      {loans.map((loan, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md mb-8 border-t-4 border-blue-500"
        >
          <h2 className="text-xl font-bold mb-4">Loan {index + 1} Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`loan-${index}-name`}>Name</Label>
              <Input
                id={`loan-${index}-name`}
                value={loan.name}
                onChange={(e) =>
                  handleLoanInputChange(index, 'name', e.target.value)
                }
              />
            </div>
            <div>
              <Label htmlFor={`loan-${index}-interest-rate`}>
                Interest Rate (value in %)
              </Label>
              <Input
                id={`loan-${index}-interest-rate`}
                type="number"
                value={loan.interestRate}
                onChange={(e) =>
                  handleLoanInputChange(index, 'interestRate', e.target.value)
                }
              />
            </div>
            <div>
              <Label htmlFor={`loan-${index}-amount-owed`}>Amount Owed</Label>
              <Input
                id={`loan-${index}-amount-owed`}
                type="number"
                value={loan.amountOwed}
                onChange={(e) =>
                  handleLoanInputChange(index, 'amountOwed', e.target.value)
                }
              />
            </div>
            <div>
              <Label htmlFor={`loan-${index}-monthly-repayment`}>
                Monthly Repayment
              </Label>
              <Input
                id={`loan-${index}-monthly-repayment`}
                type="number"
                value={loan.monthlyRepayment}
                onChange={(e) =>
                  handleLoanInputChange(
                    index,
                    'monthlyRepayment',
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <Button variant="outline" size="lg" asChild>
          <Link href="/kiwisaver-tool/assets">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          Complete Later
        </Button>
        <Button size="lg" asChild>
          <Link href="/kiwisaver-tool/other-considerations">
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}