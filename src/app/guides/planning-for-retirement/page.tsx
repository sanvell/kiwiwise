
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, CheckCircle, PieChart, Banknote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Planning for Retirement: Your Future, Your Way',
  description: 'Start planning for your retirement today. Learn how to set goals, boost your savings, and make your KiwiSaver work for you.',
};

export default function PlanningForRetirementPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="bg-muted/50">
        <div className="container max-w-6xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Retirement isn’t an end — it’s your next big chapter.</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether it’s travel, hobbies, family time, or just peace of mind, the earlier you plan, the more freedom you’ll have to live life on your terms.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                  <Link href="#how-much">Start Planning Today</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
               <Image
                  src="https://placehold.co/600x400.png"
                  alt="Happy older couple enjoying a hobby in retirement"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="happy couple retirement hobby"
                />
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 container max-w-4xl mx-auto px-4 space-y-16">
        {/* Section 1 – Why Plan Ahead? */}
        <section id="why-plan" className="text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">More time = more choices.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Planning early gives your money time to grow — and you more freedom to choose how you spend your retirement years. Even small, consistent contributions now can make a big difference later thanks to the magic of compound growth.
          </p>
          <Card className="mt-8 bg-primary/10 border-l-4 border-primary text-left p-6">
            <p className="text-primary-dark font-semibold">💡 Tip: Even if retirement feels far away, your future self will thank you for starting today. If you started with $50 a week at 25, you could have significantly more than if you started at 35.</p>
          </Card>
        </section>

        {/* Section 2 – How Much Will You Need? */}
        <section id="how-much">
          <h2 className="text-3xl font-bold font-headline mb-4 text-center">Your lifestyle will set the target.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-8">
            Think about the retirement you want. Will you own your home, travel often, or work part-time? Once you have a picture, you can work out an income target. A common guide is aiming for 70–80% of your current income.
          </p>
          <div className="text-center">
            <Button asChild size="lg">
                <Link href="/calculators">Calculate Your Retirement Goal <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
        
        {/* Section 3 - Boosting Savings */}
        <section id="boosting-savings">
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">Small steps that add up big.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center p-4">
                    <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Increase contributions</h3>
                    <p className="text-sm text-muted-foreground">Even 1-2% more makes a difference.</p>
                </Card>
                <Card className="text-center p-4">
                    <Banknote className="h-10 w-10 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Make lump-sum top-ups</h3>
                    <p className="text-sm text-muted-foreground">Use bonuses or windfalls wisely.</p>
                </Card>
                <Card className="text-center p-4">
                    <PieChart className="h-10 w-10 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Check your fund type</h3>
                    <p className="text-sm text-muted-foreground">Ensure it matches your risk appetite.</p>
                </Card>
                <Card className="text-center p-4">
                    <CheckCircle className="h-10 w-10 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Keep fees low</h3>
                    <p className="text-sm text-muted-foreground">Every dollar saved is a dollar earned.</p>
                </Card>
            </div>
        </section>

        {/* Section 4 – KiwiSaver & Beyond */}
        <section id="kiwisaver-beyond" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold font-headline mb-4">KiwiSaver is a great start — but it might not be enough.</h2>
                 <p className="text-muted-foreground mb-6">Your KiwiSaver account is a strong foundation, especially with employer and government contributions. But most people will need extra savings or investments to fund the retirement they want.</p>
                 <h3 className="font-semibold text-lg mb-2">Consider:</h3>
                 <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Additional investments (managed funds, shares, property)</li>
                    <li>Clearing debt before retirement</li>
                    <li>Building an emergency buffer for unexpected costs</li>
                 </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold font-headline mb-4">Stay on Track</h3>
                <p className="text-muted-foreground mb-6">Life changes — and your retirement plan should too. Review your fund, contributions, and retirement goals at least once a year.</p>
                <Button asChild><Link href="#">Log In & Review Your Plan</Link></Button>
            </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="text-center bg-primary/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold font-headline mb-4">Your future starts now.</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">The best time to plan for retirement was yesterday. The next best time is today. Start small, stay consistent, and your future self will thank you.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                  <Link href="/lifestage-kiwisaver">Start Planning</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                  <Link href="#">Talk to an Adviser</Link>
              </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
