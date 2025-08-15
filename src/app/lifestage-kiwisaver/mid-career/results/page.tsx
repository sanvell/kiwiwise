'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { BarChart2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MidCareerResultsPage() {
  const router = useRouter();

  const results = {
    recommendedFund: 'Balanced or Growth Fund',
    reason: "At this stage, a balanced approach often works well. You're still focused on growth but may want to temper risk as you get closer to major financial goals.",
    tips: [
      "Ensure your contribution rate is on track for your retirement goals.",
      "A Balanced fund can provide a good mix of growth and stability.",
      "Review your KiwiSaver annually, especially after major life events like buying a home.",
      "Consider consolidating other investments to get a clearer financial picture.",
    ]
  };

  return (
    <div className="bg-muted/50 min-h-screen py-16">
      <div className="container max-w-3xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <BarChart2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Mid-Career Results</h2>
            <CardTitle className="font-headline text-3xl md:text-4xl">We Recommend a {results.recommendedFund}</CardTitle>
            <CardDescription className="pt-2 text-base">{results.reason}</CardDescription>
          </CardHeader>
          <CardContent className="text-left space-y-6">
            <div>
                <h3 className="text-lg font-semibold font-headline mb-4">Top Tips for You:</h3>
                 <ul className="space-y-3">
                    {results.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </CardContent>
           <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
               <Button asChild size="lg">
                    <Link href="/compare-funds">Compare Funds <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/lifestage-kiwisaver">Start Over</Link>
                </Button>
           </CardFooter>
        </Card>
      </div>
    </div>
  );
}
