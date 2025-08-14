import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BarChart2, Calculator, Newspaper, BookOpen } from 'lucide-react';
import Image from 'next/image';

const featureCards = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'In-Depth Guides',
    description: 'From KiwiSaver basics to advanced strategies, our guides are here to help.',
    link: '/guides',
    linkText: 'Explore Guides',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Fund Comparison',
    description: 'Compare KiwiSaver funds side-by-side to find the perfect fit for you.',
    link: '/compare-funds',
    linkText: 'Compare Funds',
  },
  {
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: 'Financial Calculators',
    description: 'Estimate your future balance, retirement savings, and more with our tools.',
    link: '/calculators',
    linkText: 'Use Calculators',
  },
   {
    icon: <Newspaper className="h-8 w-8 text-primary" />,
    title: 'Latest News',
    description: 'Stay informed with the latest updates on KiwiSaver and market performance.',
    link: '/news',
    linkText: 'Read News',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
           <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgxNDgsIDY2JSwgODAlKSI+PHBhdGggZD0iTTAgLjUgMzIgLjVtMCAxNiAwIC41IDMyIC41TTMyIDE2LjUgMCAxNi41TTguNSA1LjV2LTEybTcgNXYtMTJtNyA1di0xMm0tMTEgMjF2LTEybTcgNXYtMTJtNyA1di0xMiIvPjwvc3ZnPg==')_repeat_0_0] [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]"></div>
          <div className="container max-w-7xl mx-auto px-4 z-10 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center md:text-left">
                <p className="font-semibold text-primary animate-fade-in-up [animation-delay:200ms]">Welcome to KiwiWise</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground animate-fade-in-up [animation-delay:400ms]">
                  Your KiwiSaver, <span className="text-primary">Smarter.</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 animate-fade-in-up [animation-delay:600ms]">
                  Navigate your KiwiSaver journey with confidence. We provide the tools and insights you need to grow your wealth for a brighter future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 animate-fade-in-up [animation-delay:800ms]">
                  <Button asChild size="lg">
                    <Link href="/guides">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/compare-funds">Compare Funds</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block animate-fade-in-up [animation-delay:1000ms]">
                <Image 
                  src="https://placehold.co/600x400.png"
                  alt="Financial growth illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="financial growth chart"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Everything you need in one place</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                KiwiWise offers a comprehensive suite of tools and resources to empower your financial decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureCards.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-headline pt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                    <Button asChild variant="link" className="mt-4">
                      <Link href={feature.link}>{feature.linkText} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
