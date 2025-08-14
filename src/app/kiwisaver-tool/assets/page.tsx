'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function RetirementAssets() {
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [assetDetails, setAssetDetails] = useState({
    homeDownsizeCurrentValue: '',
    homeDownsizeNewHomeSpend: '',
    superBalance: '',
    yourContribution: '',
    employerContribution: '',
    client1SuperannuationType: '',
    otherSuperDetails: '',
    managedFundCount: '',
    rentalPropertyCount: '',
    businessOwnershipValue: '',
    termDepositsValue: '',
    investmentPortfolioValue: '',
    investmentPortfolioAnnualContributions: '',
    investmentPortfolioType: '',
    otherInvestmentsValue: '',
    otherInvestmentsDescription: '',
  });

  const handleCheckboxChange = (asset: string) => {
    setSelectedAssets(prevSelectedAssets =>
      prevSelectedAssets.includes(asset)
        ? prevSelectedAssets.filter(item => item !== asset)
        : [...prevSelectedAssets, asset]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setAssetDetails(prevDetails => ({ ...prevDetails, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setAssetDetails(prevDetails => ({ ...prevDetails, [id]: value }));
  };

  const isAssetSelected = (asset: string) => selectedAssets.includes(asset);

  return (
    <div className="container mx-auto py-8 px-4">
      <Progress value={66} className="mb-8" />
      <h1 className="text-3xl font-bold mb-4">Retirement Assets - Step 6 of 9</h1>
      <p className="text-gray-600 mb-8">
        Which assets other than KiwiSaver will you use for retirement expenses? For example, if you plan on downsizing your current home on retirement and moving someplace cheaper, tick the Own Home box.
        On the other hand, if you want to give away any of your assets as an inheritance, do not tick that box. We will then not take them into consideration.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <Checkbox
            id="homeDownsize"
            checked={isAssetSelected('homeDownsize')}
            onCheckedChange={() => handleCheckboxChange('homeDownsize')}
            className="mr-2"
          />
          <Label htmlFor="homeDownsize" className="text-lg font-medium">Home Downsize</Label>
        </div>
        {isAssetSelected('homeDownsize') && (
          <div className="ml-6 space-y-4">
            <div>
              <Label htmlFor="homeDownsizeCurrentValue">The current value of your home is</Label>
              <Input
                id="homeDownsizeCurrentValue"
                type="number"
                value={assetDetails.homeDownsizeCurrentValue}
                onChange={handleInputChange}
                prefix="$"
              />
            </div>
            <div>
              <Label htmlFor="homeDownsizeNewHomeSpend">How much will you spend on your new home?</Label>
              <Input
                id="homeDownsizeNewHomeSpend"
                type="number"
                value={assetDetails.homeDownsizeNewHomeSpend}
                onChange={handleInputChange}
                prefix="$"
              />
            </div>
          </div>
        )}

        <div className="flex items-center mb-4">
          <Checkbox
            id="workOverseasSuper"
            checked={isAssetSelected('workOverseasSuper')}
            onCheckedChange={() => handleCheckboxChange('workOverseasSuper')}
            className="mr-2"
          />
          <Label htmlFor="workOverseasSuper" className="text-lg font-medium">Work/Overseas Super</Label>
        </div>
        {isAssetSelected('workOverseasSuper') && (
          <div className="ml-6 space-y-4">
            <div>
              <Label htmlFor="superBalance">Your Super Balance</Label>
              <Input
                id="superBalance"
                type="number"
                value={assetDetails.superBalance}
                onChange={handleInputChange}
                prefix="$"
              />
            </div>
            <div>
              <Label htmlFor="yourContribution">Your Contribution</Label>
              <Select onValueChange={(value) => handleSelectChange('yourContribution', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="employerContribution">Employer Contribution</Label>
               <Select onValueChange={(value) => handleSelectChange('employerContribution', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="optionA">Option A</SelectItem>
                  <SelectItem value="optionB">Option B</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div>
              <Label htmlFor="client1SuperannuationType">Client 1 Superannuation Type</Label>
               <Select onValueChange={(value) => handleSelectChange('client1SuperannuationType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="typeX">Type X</SelectItem>
                  <SelectItem value="typeY">Type Y</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div>
              <Label htmlFor="otherSuperDetails">Other details?</Label>
              <Textarea
                id="otherSuperDetails"
                value={assetDetails.otherSuperDetails}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        <div className="flex items-center mb-4">
          <Checkbox
            id="managedFund"
            checked={isAssetSelected('managedFund')}
            onCheckedChange={() => handleCheckboxChange('managedFund')}
            className="mr-2"
          />
          <Label htmlFor="managedFund" className="text-lg font-medium">Managed Fund</Label>
        </div>
        {isAssetSelected('managedFund') && (
          <div className="ml-6">
            <Label htmlFor="managedFundCount">How many managed funds do you have?</Label>
            <Input
              id="managedFundCount"
              type="number"
              value={assetDetails.managedFundCount}
              onChange={handleInputChange}
            />
          </div>
        )}

         <div className="flex items-center mb-4">
          <Checkbox
            id="rentalProperty"
            checked={isAssetSelected('rentalProperty')}
            onCheckedChange={() => handleCheckboxChange('rentalProperty')}
            className="mr-2"
          />
          <Label htmlFor="rentalProperty" className="text-lg font-medium">Rental Property</Label>
        </div>
        {isAssetSelected('rentalProperty') && (
          <div className="ml-6">
            <Label htmlFor="rentalPropertyCount">How many rental properties do you have?</Label>
            <Input
              id="rentalPropertyCount"
              type="number"
              value={assetDetails.rentalPropertyCount}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="flex items-center mb-4">
          <Checkbox
            id="businessOwnership"
            checked={isAssetSelected('businessOwnership')}
            onCheckedChange={() => handleCheckboxChange('businessOwnership')}
            className="mr-2"
          />
          <Label htmlFor="businessOwnership" className="text-lg font-medium">Business Ownership</Label>
        </div>
        {isAssetSelected('businessOwnership') && (
          <div className="ml-6">
            <Label htmlFor="businessOwnershipValue">Estimated Value of Business at retirement</Label>
            <Input
              id="businessOwnershipValue"
              type="number"
              value={assetDetails.businessOwnershipValue}
              onChange={handleInputChange}
              prefix="$"
            />
          </div>
        )}

         <div className="flex items-center mb-4">
          <Checkbox
            id="termDeposits"
            checked={isAssetSelected('termDeposits')}
            onCheckedChange={() => handleCheckboxChange('termDeposits')}
            className="mr-2"
          />
          <Label htmlFor="termDeposits" className="text-lg font-medium">Term Deposits</Label>
        </div>
        {isAssetSelected('termDeposits') && (
          <div className="ml-6">
            <Label htmlFor="termDepositsValue">Total Value of Term Deposits</Label>
            <Input
              id="termDepositsValue"
              type="number"
              value={assetDetails.termDepositsValue}
              onChange={handleInputChange}
              prefix="$"
            />
          </div>
        )}

        <div className="flex items-center mb-4">
          <Checkbox
            id="investmentPortfolioCash"
            checked={isAssetSelected('investmentPortfolioCash')}
            onCheckedChange={() => handleCheckboxChange('investmentPortfolioCash')}
            className="mr-2"
          />
          <Label htmlFor="investmentPortfolioCash" className="text-lg font-medium">Investment Portfolio/Cash</Label>
        </div>
        {isAssetSelected('investmentPortfolioCash') && (
          <div className="ml-6 space-y-4">
            <div>
              <Label htmlFor="investmentPortfolioValue">Value of Investment Portfolio</Label>
              <Input
                id="investmentPortfolioValue"
                type="number"
                value={assetDetails.investmentPortfolioValue}
                onChange={handleInputChange}
                prefix="$"
              />
            </div>
             <div>
              <Label htmlFor="investmentPortfolioAnnualContributions">Annual Contributions to Investment Portfolio</Label>
              <Input
                id="investmentPortfolioAnnualContributions"
                type="number"
                value={assetDetails.investmentPortfolioAnnualContributions}
                onChange={handleInputChange}
                prefix="$"
              />
            </div>
            <div>
              <Label htmlFor="investmentPortfolioType">Type of Investment Portfolio</Label>
               <Select onValueChange={(value) => handleSelectChange('investmentPortfolioType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="typeA">Type A</SelectItem>
                  <SelectItem value="typeB">Type B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <div className="flex items-center mb-4">
          <Checkbox
            id="otherInvestments"
            checked={isAssetSelected('otherInvestments')}
            onCheckedChange={() => handleCheckboxChange('otherInvestments')}
            className="mr-2"
          />
          <Label htmlFor="otherInvestments" className="text-lg font-medium">Other Investments</Label>
        </div>
        {isAssetSelected('otherInvestments') && (
          <div className="ml-6 space-y-4">
            <div>
              <Label htmlFor="otherInvestmentsValue">Estimated Value of Other Investments at retirement</Label>
              <Input
                id="otherInvestmentsValue"
                type="number"
                value={assetDetails.otherInvestmentsValue}
                onChange={handleInputChange}
                prefix="$"
              />
            </div>
            <div>
              <Label htmlFor="otherInvestmentsDescription">Brief Description of Other Investments</Label>
              <Textarea
                id="otherInvestmentsDescription"
                value={assetDetails.otherInvestmentsDescription}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Link href="/kiwisaver-tool/provider-selection">
          <Button variant="outline">Back</Button>
        </Link>
        <Button variant="outline">Complete Later</Button>
        <Link href="/kiwisaver-tool/loans">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}