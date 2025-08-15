
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KiwiSaver 101: How KiwiSaver Works in NZ (Contributions, Government Top-Ups, First-Home & Retirement)',
  description: 'New to KiwiSaver? Learn how contributions work, what the Government pays, choosing a fund, first-home withdrawals, and accessing savings at 65.',
  openGraph: {
    title: 'KiwiSaver 101 — Made Simple',
    description: 'The essentials of KiwiSaver: contributions, employer match, Government contribution, first-home help, and retirement access.',
    images: [{
      url: 'https://placehold.co/1200x630.png', // Placeholder OG image
      width: 1200,
      height: 630,
      alt: 'Illustration of KiwiSaver journey from contributions to retirement',
    }],
  },
};

export default function KiwiSaver101Page() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="bg-muted/50">
        <div className="container max-w-5xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">KiwiSaver 101 — Made Simple</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            KiwiSaver is one of the easiest ways to build long-term wealth in Aotearoa. On this page, you’ll learn what KiwiSaver is, how your money grows, what you (and your employer) put in, what the Government pays, and how to use it for a first home or retirement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg">
                <Link href="/lifestage-kiwisaver">Get your KiwiSaver guidance <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="/compare-funds">Compare funds</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="py-16 container max-w-4xl mx-auto px-4">
        <div className="space-y-12">

          {/* What is KiwiSaver? */}
          <section id="what-is-kiwisaver">
            <h2 className="text-3xl font-bold font-headline mb-4">What is KiwiSaver?</h2>
            <p className="text-muted-foreground text-lg">
              KiwiSaver is a voluntary savings scheme designed to help New Zealanders save for retirement, with a possible first-home boost for eligible members. You (and often your employer) contribute regularly; your provider invests the money in funds that can grow over time. You generally access your savings at 65 (with specific exceptions listed below).
            </p>
          </section>

          {/* How KiwiSaver works */}
          <section id="how-it-works">
            <h2 className="text-3xl font-bold font-headline mb-4">How KiwiSaver works (the basics)</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                <li>You contribute a small percentage of your pay.</li>
                <li>Your employer contributes (if you’re eligible and contributing through payroll).</li>
                <li>The Government may contribute each year if you’re eligible.</li>
                <li>Your provider invests your money in a fund (e.g., Conservative, Balanced, Growth).</li>
                <li>Over time, returns (minus fees and tax) help grow your balance.</li>
            </ul>
             <p className="mt-4 text-sm text-muted-foreground"><strong>Tip:</strong> Contribution settings are changing in stages from 2026 (see “Contributions at a glance” below).</p>
          </section>

          {/* Contributions at a glance */}
          <section id="contributions">
            <h2 className="text-3xl font-bold font-headline mb-4">Contributions at a glance</h2>
            <Card>
                <CardContent className="p-6 space-y-4">
                    <div>
                        <h3 className="font-semibold text-xl">Your contributions (employee)</h3>
                        <p className="text-muted-foreground">Standard employee contribution rates you can choose from: typically 3%, 4%, 6%, 8% or 10% of your before-tax pay. (Some settings are changing from 2026 — see “What’s changing?”)</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Employer contributions</h3>
                        <p className="text-muted-foreground">If you’re contributing from salary/wages and meet eligibility rules, your employer generally contributes a minimum match by default.</p>
                    </div>
                     <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-lg flex items-center">What’s changing? <Badge variant="destructive" className="ml-2">Upcoming</Badge></h4>
                        <p className="text-muted-foreground mt-2">From 1 April 2026, the default contribution rate for both employees and employers increases from 3% to 3.5%, and then to 4% from 1 April 2028. There is an option to temporarily remain at 3% from February 2026 if needed. Details and exceptions apply.</p>
                    </div>
                    <div>
                         <h3 className="font-semibold text-xl flex items-center">Government contribution (Member Tax Credit)
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 ml-2 text-muted-foreground cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-xs">
                                        <p>From 1 July 2025, the rate is 25c per $1, max $260.72 per year. To get the max, contribute at least $1,042.86. Eligibility applies.</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                         </h3>
                        <p className="text-muted-foreground">From 1 July 2025, the Government contributes 25 cents per $1 you put in (was 50c), capped at $260.72 per year when you contribute at least $1,042.86 in that 1 July–30 June year.</p>
                         <p className="text-muted-foreground mt-2">An income limit applies (no MTC above certain income, currently $180,000). See official guidance and provider explainers linked in our sources.</p>
                         <p className="text-muted-foreground mt-2 bg-primary/10 p-3 rounded-md"><strong>Quick example:</strong> Contribute $1,042.86 between 1 July and 30 June → you get the maximum $260.72 Government contribution (if eligible).</p>
                    </div>
                </CardContent>
            </Card>
          </section>

          {/* Choosing a fund */}
          <section id="choosing-fund">
            <h2 className="text-3xl font-bold font-headline mb-4">Choosing a fund (risk vs. time)</h2>
            <p className="text-muted-foreground text-lg mb-4">Your fund choice should reflect how long until you need the money and how you feel about ups and downs:</p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                <li><strong>Conservative:</strong> Lower risk / lower expected return; aims for steadier value.</li>
                <li><strong>Balanced:</strong> Middle-of-the-road risk and return.</li>
                <li><strong>Growth/Aggressive:</strong> Higher risk / higher expected return; values can fluctuate more in the short term.</li>
            </ul>
             <p className="text-muted-foreground text-lg mt-4">Not sure where to start? Use our LifeStage KiwiSaver tool to get a personalised fund-type suggestion based on your time horizon and risk tolerance.</p>
             <Button asChild className="mt-4">
                <Link href="/lifestage-kiwisaver">Find your fund type <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </section>

          {/* First Home */}
           <section id="first-home">
            <h2 className="text-3xl font-bold font-headline mb-4">Using KiwiSaver for your first home</h2>
            <p className="text-muted-foreground text-lg">If you’ve been a KiwiSaver member for at least 3 years and meet the criteria, you may be able to withdraw most of your balance to help buy your first home. Typically you can withdraw your contributions, employer contributions, government contributions, and returns, but you must leave at least $1,000 in your account and can’t withdraw Australian super transfers. Criteria and exceptions apply; check details with your provider and Kāinga Ora.</p>
             <Button asChild className="mt-4" variant="outline">
                <Link href="#">See if you can use KiwiSaver for your first home</Link>
            </Button>
          </section>

          {/* Retirement */}
           <section id="retirement">
            <h2 className="text-3xl font-bold font-headline mb-4">Accessing KiwiSaver at 65 (and after)</h2>
            <p className="text-muted-foreground text-lg">You can generally withdraw your KiwiSaver at 65. If you joined before 1 July 2019, there may be a five-year lock-in from when you joined (unless you opt out at 65). If you keep contributing during that period, your employer may also need to keep contributing; rules vary, so check the official guidance and your employer’s obligations.</p>
            <Button asChild className="mt-4" variant="outline">
                <Link href="#">Planning retirement income?</Link>
            </Button>
          </section>

          {/* Fees & Tax */}
          <section id="fees-tax">
            <h2 className="text-3xl font-bold font-headline mb-4">Fees and tax (quick overview)</h2>
             <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                <li><strong>Fees:</strong> Providers charge fees that are deducted from your balance — lower fees can make a big difference over time. Compare fees across funds before switching.</li>
                <li><strong>Tax (PIR):</strong> KiwiSaver investments are taxed using your Prescribed Investor Rate (PIR). Make sure your PIR is correct to avoid under- or over-paying tax.</li>
            </ul>
             <Button asChild className="mt-4">
                <Link href="/compare-funds">Compare fees across funds <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </section>
          
           {/* Key Dates */}
          <section id="key-dates">
              <h2 className="text-3xl font-bold font-headline mb-4">What’s changing (key dates)</h2>
              <div className="space-y-4">
                  <Card className="bg-muted/50">
                      <CardHeader>
                          <CardTitle className="font-headline text-xl">1 July 2025</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Government contribution set at 25c per $1 you contribute, max $260.72 per year (with an income cap).</p>
                      </CardContent>
                  </Card>
                   <Card className="bg-muted/50">
                      <CardHeader>
                          <CardTitle className="font-headline text-xl">1 April 2026</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Default employee & employer rates increase to 3.5%; option to temporarily stay at 3% (from Feb 2026). 16–17-year-olds expanded eligibility for employer/Govt contributions.</p>
                      </CardContent>
                  </Card>
                   <Card className="bg-muted/50">
                      <CardHeader>
                          <CardTitle className="font-headline text-xl">1 April 2028</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Default rates increase again to 4%.</p>
                      </CardContent>
                  </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-4">These settings can change. Always check the latest official guidance before making decisions.</p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-3xl font-bold font-headline mb-4">Common questions (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Do I have to join KiwiSaver?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  No — KiwiSaver is voluntary. Many people join because contributions (yours + employer + possible Government) can add up over time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Can I pause contributions if money’s tight?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  You can apply to pause (e.g., a savings suspension) or, from Feb 2026, temporarily stay at 3% if you can’t afford the 3.5% default increase from Apr 2026. Check official settings and talk to your provider or employer payroll.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Which fund is “best”?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  There’s no one best fund — the right choice depends on your timeframe and risk tolerance. Our LifeStage tool can help you find a fund type that fits you.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Can I use KiwiSaver for anything besides retirement or a first home?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  There are limited early-withdrawal grounds (e.g., significant financial hardship or serious illness) assessed by your provider. Rules apply.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">What if my balance goes down?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Market ups and downs are normal. Short-term drops can be uncomfortable, but your fund choice should match your time horizon so you’re not forced to sell at the wrong time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Glossary */}
          <section id="glossary">
              <h2 className="text-3xl font-bold font-headline mb-4">Glossary</h2>
              <dl className="space-y-4">
                  <div>
                      <dt className="font-semibold text-lg">Contribution rate</dt>
                      <dd className="text-muted-foreground">The % of your before-tax pay you put into KiwiSaver.</dd>
                  </div>
                  <div>
                      <dt className="font-semibold text-lg">Employer contribution</dt>
                      <dd className="text-muted-foreground">The amount your employer puts in if you’re contributing via payroll and eligible.</dd>
                  </div>
                  <div>
                      <dt className="font-semibold text-lg">Government contribution / Member Tax Credit (MTC)</dt>
                      <dd className="text-muted-foreground">Annual top-up for eligible members (limits and settings apply).</dd>
                  </div>
                  <div>
                      <dt className="font-semibold text-lg">Fund type</dt>
                      <dd className="text-muted-foreground">How your money is invested (Conservative → Aggressive).</dd>
                  </div>
                  <div>
                      <dt className="font-semibold text-lg">PIR</dt>
                      <dd className="text-muted-foreground">Prescribed Investor Rate — the tax rate applied to your investment returns.</dd>
                  </div>
                  <div>
                      <dt className="font-semibold text-lg">First-home withdrawal</dt>
                      <dd className="text-muted-foreground">Ability to use most of your balance for a first home if you meet criteria (must leave at least $1,000; Aussie transfers excluded).</dd>
                  </div>
              </dl>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="text-center bg-muted/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold font-headline mb-6">Next steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Button asChild variant="outline"><Link href="/lifestage-kiwisaver">Find your fund type</Link></Button>
                <Button asChild variant="outline"><Link href="/compare-funds">Compare fees & performance</Link></Button>
                <Button asChild variant="outline"><Link href="#">See first-home options</Link></Button>
                <Button asChild variant="outline"><Link href="#">Plan your retirement income</Link></Button>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t mt-16">
          <div className="container max-w-4xl mx-auto py-6 px-4">
              <p className="text-xs text-muted-foreground text-center">
                  This page provides general information only and is not personalised financial advice. KiwiSaver settings can change. Consider your circumstances and read the Product Disclosure Statement (PDS) before making decisions. If needed, seek advice from a licensed Financial Advice Provider.
              </p>
          </div>
      </footer>
    </div>
  );
}
