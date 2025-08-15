'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PersonStanding, Briefcase, GraduationCap, Building } from 'lucide-react';
import React from 'react';

const lifeStages = [
  {
    name: 'Early Career',
    age: '18-30',
    description: 'Just starting out, focusing on growth and long-term habits.',
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    path: '/lifestage-kiwisaver/early-career/page-1',
  },
  {
    name: 'Mid-Career',
    age: '31-50',
    description: 'Optimizing savings and planning for major life events.',
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    path: '/lifestage-kiwisaver/mid-career/page-1',
  },
  {
    name: 'Pre-Retirement',
    age: '51-65',
    description: 'Preserving capital and preparing for withdrawals.',
    icon: <Building className="h-10 w-10 text-primary" />,
    path: '/lifestage-kiwisaver/pre-retirement/page-1',
  },
  {
    name: 'Retirement',
    age: '66+',
    description: 'Managing withdrawals, income, and liquidity.',
    icon: <PersonStanding className="h-10 w-10 text-primary" />,
    path: '/lifestage-kiwisaver/retirement/page-1',
  },
];

export default function LifeStageKiwiSaverPage() {
  const router = useRouter();

  const handleStageSelection = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-background">
      <header className="bg-muted/50 py-24">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">LifeStage KiwiSaver Tool</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's find out which KiwiSaver fund is right for your stage in life.
          </p>
        </div>
      </header>
      <main className="py-16 container max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">First, select your current life stage:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifeStages.map((stage) => (
            <Card key={stage.name} className="flex flex-col text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    {stage.icon}
                </div>
                <CardTitle className="font-headline pt-4">{stage.name}</CardTitle>
                <CardDescription>{stage.age}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{stage.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button onClick={() => handleStageSelection(stage.path)} className="w-full" disabled={stage.path === '#'}>
                  Select Stage
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
