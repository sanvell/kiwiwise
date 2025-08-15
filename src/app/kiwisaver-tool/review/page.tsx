'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';

export default function ReviewDetailsPage() {
  // This is a placeholder. In a real application, you would fetch
  // the user's data from state management (like Redux, Context, or
  // a custom hook) or a backend.
  const userData = {
    firstName: 'Samuel',
    lastName: 'Bell',
    email: 'samuel.bell@gmail.com',
    phone: '0272204353',
    // ... other data from previous steps
  };

  const progress = 100; // Assuming this is the final step

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-6">
        {/* Placeholder for the progress indicator */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {/* This is a simplified representation. A real progress bar
              or step indicator component would be more complex. */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              1
            </div>
            Choice
          </div>
          <span>—</span>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              2
            </div>
            Goals
          </div>
          <span>—</span>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              3
            </div>
            Income
          </div>
          <span>—</span>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              4
            </div>
            Preferences
          </div>
          <span>—</span>
           <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              5
            </div>
            KiwiSaver
          </div>
           <span>—</span>
           <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              6
            </div>
            Assets
          </div>
           <span>—</span>
           <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              7
            </div>
            Loans
          </div>
           <span>—</span>
           <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mr-1">
              8
            </div>
            Other
          </div>
          <span>—</span>
           <div className="flex items-center">
            <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center text-primary mr-1 font-medium">
              9
            </div>
            Contact
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-6">
        Review Your Details - Step 9 of 9
      </h1>

      <Card className="mb-6">
        <CardContent className="flex justify-center p-4">
          {/* Placeholder for the image */}
          <Image
            src="https://placehold.co/400x300.png"
            alt="Review Image"
            width={400} 
            height={300}
            data-ai-hint="review document"
            className="rounded-md"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground">
              First Name
            </label>
            <Input id="firstName" value={userData.firstName} readOnly className="mt-1" />
          </div>
          <div>
             <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground">
              Last Name
            </label>
            <Input id="lastName" value={userData.lastName} readOnly className="mt-1" />
          </div>
          <div>
             <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email Address
            </label>
            <Input id="email" value={userData.email} readOnly className="mt-1" />
          </div>
          <div>
             <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
              Phone Number
            </label>
            <Input id="phone" value={userData.phone} readOnly className="mt-1" />
          </div>
          {/* Add more sections here to display data from other steps */}
        </CardContent>
      </Card>

      <div className="flex justify-between mt-6">
        <Button asChild variant="secondary">
          <Link href="/kiwisaver-tool/other-considerations">Back</Link>
        </Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}
