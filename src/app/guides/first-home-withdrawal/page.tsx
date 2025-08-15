
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight, FileText, Check, Home, Phone, Clock, Handshake, Download, Building } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KiwiSaver First Home Withdrawal Guide',
  description: 'Learn how to withdraw your KiwiSaver savings to help buy your first home. Check your eligibility and follow our step-by-step guide.',
};

export default function FirstHomeWithdrawalPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="bg-muted/50">
        <div className="container max-w-6xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Turn Your KiwiSaver Into Your First Home</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    If you’ve been contributing to KiwiSaver, you could be closer to your first home than you think. Learn how to withdraw your savings to help with your deposit.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <Button asChild size="lg">
                        <Link href="#eligibility">Check If You’re Eligible <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="#"><Download className="mr-2 h-5 w-5" /> Download Checklist</Link>
                    </Button>
                </div>
            </div>
             <div className="hidden md:block">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Happy couple holding keys to their first home"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="happy couple home keys"
                />
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 container max-w-4xl mx-auto px-4">
        <div className="space-y-16">
          {/* Section 1 – How It Works */}
          <section id="how-it-works" className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Your KiwiSaver Can Be Your First Step onto the Ladder</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You can use most of your KiwiSaver savings towards buying your first home or land to build on. It’s a one-time opportunity designed to help you get into the property market sooner. Here’s how it works:
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-4">
                        <FileText className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl font-headline">1. Apply</h3>
                    <p className="text-muted-foreground">You apply through your KiwiSaver provider before settlement day.</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-4">
                        <Check className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl font-headline">2. Approval</h3>
                    <p className="text-muted-foreground">They check your eligibility and process your application.</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-4">
                        <Home className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl font-headline">3. Purchase</h3>
                    <p className="text-muted-foreground">The funds are paid to your solicitor for your deposit or purchase.</p>
                </div>
            </div>
          </section>

          {/* Section 2 – Eligibility Checklist */}
          <section id="eligibility">
            <h2 className="text-3xl font-bold font-headline mb-6 text-center">Are You Eligible?</h2>
            <Card className="bg-muted/50">
                <CardContent className="p-8">
                     <ul className="space-y-4 text-lg">
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" /><span>You’ve been a KiwiSaver member for at least <span className="font-bold">3 years</span>.</span></li>
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" /><span>You’re buying your first home (or qualify as a 'second chance' home buyer).</span></li>
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" /><span>The property will be your <span className="font-bold">main home</span>, not an investment.</span></li>
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" /><span>You have <span className="font-bold">not</span> made a first home withdrawal before.</span></li>
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" /><span>You will leave at least <span className="font-bold">$1,000</span> in your account after the withdrawal.</span></li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-6">If you’ve owned property before but no longer do, you may still qualify under the “second chance” rules. Check with Kāinga Ora.</p>
                    <div className="text-center mt-6">
                        <Button asChild>
                            <Link href="https://kaingaora.govt.nz/" target="_blank" rel="noopener noreferrer">Check My Eligibility with Kāinga Ora <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </section>

          {/* Section 3 – How Much You Can Withdraw */}
          <section id="how-much">
             <h2 className="text-3xl font-bold font-headline mb-4">Almost All Your KiwiSaver Savings – With One Small Exception</h2>
             <p className="text-lg text-muted-foreground">You can withdraw all your KiwiSaver savings except for the initial $1,000 Government kickstart (if you received one) and any funds transferred from an Australian Super scheme.</p>
             <p className="text-lg text-muted-foreground mt-2">This means you can use your contributions, your employer’s contributions, and all your investment returns to boost your deposit.</p>
             <div className="mt-6 p-4 bg-primary/10 text-primary-dark rounded-lg">
                <p className="font-semibold">Remember: you’ll need to leave at least $1,000 in your account after the withdrawal.</p>
             </div>
          </section>

          {/* Section 4 – Step-by-Step Guide */}
          <section id="how-to-apply">
            <h2 className="text-3xl font-bold font-headline mb-6">How to Apply</h2>
            <ol className="space-y-6 relative border-l-2 border-primary/20 pl-8">
                <li className="space-y-1">
                    <div className="absolute -left-4 top-1 h-8 w-8 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center"><Phone className="h-4 w-4 text-primary"/></div>
                    <h4 className="font-semibold text-xl">Contact your solicitor</h4>
                    <p className="text-muted-foreground">They’ll handle the legal process and liaise with your KiwiSaver provider.</p>
                </li>
                <li className="space-y-1">
                    <div className="absolute -left-4 top-1 h-8 w-8 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center"><FileText className="h-4 w-4 text-primary"/></div>
                    <h4 className="font-semibold text-xl">Complete the application form</h4>
                    <p className="text-muted-foreground">Your provider will give you this form to complete.</p>
                </li>
                <li className="space-y-1">
                    <div className="absolute -left-4 top-1 h-8 w-8 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center"><Building className="h-4 w-4 text-primary"/></div>
                    <h4 className="font-semibold text-xl">Provide supporting documents</h4>
                    <p className="text-muted-foreground">Proof of identity, sale and purchase agreement, and proof of eligibility.</p>
                </li>
                <li className="space-y-1">
                     <div className="absolute -left-4 top-1 h-8 w-8 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center"><Clock className="h-4 w-4 text-primary"/></div>
                    <h4 className="font-semibold text-xl">Submit before settlement</h4>
                    <p className="text-muted-foreground">Apply well in advance (at least 10 working days before settlement is recommended).</p>
                </li>
                <li className="space-y-1">
                     <div className="absolute -left-4 top-1 h-8 w-8 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center"><Handshake className="h-4 w-4 text-primary"/></div>
                    <h4 className="font-semibold text-xl">Funds are transferred</h4>
                    <p className="text-muted-foreground">Your provider pays the funds to your solicitor, who uses it for your purchase.</p>
                </li>
            </ol>
          </section>

          {/* Section 5 – Combining With the First Home Grant */}
          <section id="first-home-grant" className="bg-muted/50 rounded-lg p-8">
             <div className="text-center">
                 <h2 className="text-3xl font-bold font-headline mb-4">Boost Your Deposit Even More</h2>
                 <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">You can combine your KiwiSaver First Home Withdrawal with the First Home Grant from Kāinga Ora. If eligible, you could get up to $5,000 for an existing home or up to $10,000 for a new build.</p>
                  <Button asChild>
                    <Link href="https://kaingaora.govt.nz/home-ownership/first-home-grant/" target="_blank" rel="noopener noreferrer">Learn About the First Home Grant <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
             </div>
          </section>

          {/* Section 6 – Common Questions */}
          <section id="faq">
            <h2 className="text-3xl font-bold font-headline mb-4">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">How long does it take to process my application?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Most providers recommend allowing at least 10 working days before your settlement date to ensure the funds are ready in time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Can I use my KiwiSaver for an investment property?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  No, the property must be intended as your main residence. It cannot be used for an investment or rental property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Can I withdraw my Australian Super savings?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  No, any funds transferred from an Australian Superannuation scheme cannot be withdrawn for a first home purchase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section 7 – Call to Action */}
          <section id="cta" className="text-center bg-primary/10 rounded-lg p-8">
            <h2 className="text-3xl font-bold font-headline mb-4">Ready to Make Your Move?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">Start your KiwiSaver withdrawal process early to make sure your funds are ready when you need them.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="#">Download Withdrawal Checklist</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="#">Talk to Your KiwiSaver Provider</Link>
                </Button>
            </div>
          </section>

          {/* Section 8 - Disclaimers */}
          <footer className="border-t mt-16">
              <div className="container max-w-4xl mx-auto py-6 px-4">
                  <p className="text-xs text-muted-foreground text-center">
                    This information is a general guide only and is not financial advice. Eligibility and withdrawal amounts vary depending on your provider and personal circumstances. Always confirm details with your KiwiSaver provider and solicitor.
                  </p>
                  <div className="flex justify-center gap-4 mt-4 text-xs">
                    <Link href="https://kaingaora.govt.nz/home-ownership/kiwisaver-first-home-withdrawal/" className="hover:underline text-primary">Kāinga Ora – First Home Withdrawal Info</Link>
                    <Link href="https://kaingaora.govt.nz/home-ownership/first-home-grant/" className="hover:underline text-primary">First Home Grant Details</Link>
                    <Link href="https://www.kiwisaver.govt.nz/" className="hover:underline text-primary">KiwiSaver.govt.nz</Link>
                  </div>
              </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
