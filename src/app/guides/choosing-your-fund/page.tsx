
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, TrendingUp, Shield, BarChart, Activity, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Choosing Your KiwiSaver Fund',
  description: 'Find the fund that fits your goals, timeframes, and comfort level with risk.',
};

const fundTypes = [
  {
    name: 'Defensive Fund',
    icon: <Shield className="h-8 w-8 text-primary" />,
    growthAssets: '~0-10%',
    bestFor: 'Very short-term goals (under 1–2 years) or very low risk tolerance.',
    upside: 'Very stable value, unlikely to fall much.',
    downside: 'Lowest potential returns, may not keep up with inflation.',
    riskLevel: 1
  },
  {
    name: 'Conservative Fund',
    icon: <BarChart className="h-8 w-8 text-primary" />,
    growthAssets: '~10-35%',
    bestFor: 'Shorter-term goals or a low tolerance for ups and downs.',
    upside: 'Lower risk of loss in market downturns.',
    downside: 'Lower potential returns over the long term.',
    riskLevel: 2
  },
  {
    name: 'Balanced Fund',
    icon: <Scale className="h-8 w-8 text-primary" />,
    growthAssets: '~35-63%',
    bestFor: 'Medium-term goals (3-7 years) and a moderate comfort with risk.',
    upside: 'A balance between growth and stability.',
    downside: 'Some ups and downs along the way.',
    riskLevel: 3
  },
  {
    name: 'Growth Fund',
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    growthAssets: '~63-90%',
    bestFor: 'Long-term goals (7+ years) and a higher tolerance for market swings.',
    upside: 'Higher potential for returns over the long term.',
    downside: 'Larger ups and downs in value are expected.',
    riskLevel: 4
  },
  {
    name: 'Aggressive Fund',
    icon: <Activity className="h-8 w-8 text-primary" />,
    growthAssets: '~90-100%',
    bestFor: 'Very long-term goals and a strong comfort with risk.',
    upside: 'Highest potential for long-term growth.',
    downside: 'Significant ups and downs — not for the faint-hearted.',
    riskLevel: 5
  },
];

export default function ChoosingFundPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="bg-muted/50">
        <div className="container max-w-6xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Your money, your future — choose wisely.</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                The right KiwiSaver fund can make a big difference to your long-term savings. We’ll help you understand your options so you can feel confident in your choice.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                  <Link href="/lifestage-kiwisaver">Take the Fund Finder Quiz <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#fund-types">Compare Fund Types</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/laptop.jpg"
                alt="Person looking at charts on a laptop"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="person charts laptop"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 container max-w-5xl mx-auto px-4 space-y-24">
        {/* Section 1 – Why It Matters */}
        <section id="why-it-matters" className="text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Your Fund Affects How Your Money Grows</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            KiwiSaver funds aren’t one-size-fits-all. The type of fund you choose determines how your money is invested — and how much your balance might go up (or down) over time.
          </p>
           <Image
              src="/images/comp.jpg"
              alt="Chart showing different growth trajectories for conservative vs growth funds"
              width={800}
              height={400}
              className="rounded-lg shadow-md mt-8 mx-auto"
              data-ai-hint="conservative growth chart"
            />
        </section>

        {/* Section 2 – The Main Fund Types */}
        <section id="fund-types">
          <h2 className="text-3xl font-bold font-headline mb-4 text-center">Know Your Options</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            There are five main KiwiSaver fund types. They differ in how much of your money is invested in “growth assets” (like shares) versus “income assets” (like bonds and cash).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundTypes.map(fund => (
              <Card key={fund.name} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">{fund.icon}</div>
                  <CardTitle className="font-headline text-xl">{fund.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p><span className="font-semibold">Growth Assets:</span> {fund.growthAssets}</p>
                  <p><span className="font-semibold">Best For:</span> {fund.bestFor}</p>
                  <p><span className="font-semibold">Upside:</span> {fund.upside}</p>
                  <p><span className="font-semibold">Downside:</span> {fund.downside}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-12">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Fund Type</TableHead>
                        <TableHead>Growth Assets</TableHead>
                        <TableHead>Risk Level</TableHead>
                        <TableHead>Suggested Timeframe</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow><TableCell>Defensive</TableCell><TableCell>0-10%</TableCell><TableCell>Very Low</TableCell><TableCell>0-2 years</TableCell></TableRow>
                    <TableRow><TableCell>Conservative</TableCell><TableCell>10-35%</TableCell><TableCell>Low</TableCell><TableCell>1-3 years</TableCell></TableRow>
                    <TableRow><TableCell>Balanced</TableCell><TableCell>35-63%</TableCell><TableCell>Medium</TableCell><TableCell>3-7 years</TableCell></TableRow>
                    <TableRow><TableCell>Growth</TableCell><TableCell>63-90%</TableCell><TableCell>High</TableCell><TableCell>7+ years</TableCell></TableRow>
                    <TableRow><TableCell>Aggressive</TableCell><TableCell>90-100%</TableCell><TableCell>Very High</TableCell><TableCell>10+ years</TableCell></TableRow>
                </TableBody>
            </Table>
          </Card>
        </section>

        {/* Section 3 – How to Choose */}
        <section id="how-to-choose" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold font-headline mb-4">Match Your Fund to Your Goals</h2>
                 <p className="text-muted-foreground mb-6">Choosing the right fund comes down to three key questions:</p>
                 <ul className="space-y-4 text-lg">
                    <li className="flex items-start"><span className="text-primary font-bold mr-3 text-2xl">1.</span><div><h4 className="font-semibold">When will I need the money?</h4><p className="text-base text-muted-foreground">Short-term (0-3 yrs) → Defensive/Conservative. Medium-term (3-7 yrs) → Balanced. Long-term (7+ yrs) → Growth/Aggressive.</p></div></li>
                    <li className="flex items-start"><span className="text-primary font-bold mr-3 text-2xl">2.</span><div><h4 className="font-semibold">How much risk can I handle?</h4><p className="text-base text-muted-foreground">If watching your balance drop would cause stress, lean towards lower-risk. If you can stomach the ups and downs for bigger gains, lean towards growth.</p></div></li>
                    <li className="flex items-start"><span className="text-primary font-bold mr-3 text-2xl">3.</span><div><h4 className="font-semibold">What’s my goal?</h4><p className="text-base text-muted-foreground">Is it for a first home in 5 years or retirement in 30? Your timeline is one of the most important factors.</p></div></li>
                 </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-headline mb-4 text-center">You might not be in the best match right now</h3>
                <p className="text-muted-foreground text-center mb-6">Many people are in the wrong fund for their needs — often by default. It only takes a few minutes to check.</p>
                <div className="text-center">
                    <Button asChild><Link href="https://sorted.org.nz/tools/kiwisaver-fund-finder" target="_blank" rel="noopener noreferrer">Check Your Fund Now</Link></Button>
                </div>
            </div>
        </section>

        {/* Section 4 – Switching */}
        <section id="switching" className="text-center bg-primary/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold font-headline mb-4">Switching Funds is Easier Than You Think</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            You can change your KiwiSaver fund anytime, for free, directly with your provider.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-4"><h4 className="font-semibold text-lg">1. Log in to your provider's website or app.</h4></div>
            <div className="p-4"><h4 className="font-semibold text-lg">2. Find the “Change Fund” or “Switch Fund” option.</h4></div>
            <div className="p-4"><h4 className="font-semibold text-lg">3. Choose your new fund type and confirm.</h4></div>
          </div>
        </section>
        
        {/* Section 6 – Common Questions */}
          <section id="faq">
            <h2 className="text-3xl font-bold font-headline mb-4 text-center">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Can I have more than one KiwiSaver fund?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  No, you can only be in one KiwiSaver fund with one provider at a time. However, you can switch your fund type or provider whenever you like.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">How often should I review my fund choice?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  A good rule of thumb is to review your fund every 1-2 years, or whenever you have a major life change (like getting a new job, buying a house, or getting closer to retirement).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Will changing my fund cost me money?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Providers don't charge a fee to switch funds. However, be mindful of timing. If you switch from a growth fund to a conservative fund when markets are down, you could "lock in" your losses.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

        {/* Section 7 – Bottom CTA */}
        <section id="cta" className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Your future self will thank you.</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">Choosing the right KiwiSaver fund today could mean thousands more in your account later. Take the time to match your fund to your needs — it’s worth it.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/lifestage-kiwisaver">Find My Fund <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/compare-funds">Compare All Funds</Link>
                </Button>
            </div>
          </section>
      </main>
    </div>
  );
}

    