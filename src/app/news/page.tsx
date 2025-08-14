'use client'

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';

const articles = [
  {
    category: "Market Updates",
    title: "Market Volatility: What it Means for Your KiwiSaver",
    excerpt: "Recent global events have caused ripples in the market. We break down how this might affect your balance and what you should (and shouldn't) do.",
    date: "October 26, 2023",
    author: "Jane Doe",
    image: "https://placehold.co/600x400.png",
    imageHint: "stock market graph"
  },
  {
    category: "Provider News",
    title: "New Ethical KiwiSaver Fund Launched by Major Bank",
    excerpt: "A major NZ bank has expanded its ethical investment options. Is this new fund the right choice for you? We take a closer look at the portfolio and fees.",
    date: "October 24, 2023",
    author: "John Smith",
    image: "https://placehold.co/600x400.png",
    imageHint: "bank building"
  },
  {
    category: "Retirement",
    title: "Are You Saving Enough for Retirement? New Report Insights",
    excerpt: "A recent report highlights a potential retirement savings gap for Kiwis. Find out how you stack up and what steps you can take.",
    date: "October 20, 2023",
    author: "Emily White",
    image: "https://placehold.co/600x400.png",
    imageHint: "happy retired couple"
  },
  {
    category: "First Home",
    title: "Govt. Announces Changes to KiwiSaver First Home Withdrawal",
    excerpt: "The government has updated the criteria for using KiwiSaver for a first home deposit. Learn how these changes might impact your journey to homeownership.",
    date: "October 18, 2023",
    author: "Michael Brown",
    image: "https://placehold.co/600x400.png",
    imageHint: "house with sold sign"
  },
  {
    category: "Market Updates",
    title: "Tech Stocks Rally: A Boost for Growth Funds",
    excerpt: "A strong performance in the tech sector has provided a significant lift for growth-oriented KiwiSaver funds. What does this mean for your portfolio?",
    date: "October 15, 2023",
    author: "Jane Doe",
    image: "https://placehold.co/600x400.png",
    imageHint: "glowing circuit board"
  },
  {
    category: "Tips & Tricks",
    title: "The Power of Compounding: Start Your KiwiSaver Early",
    excerpt: "It's never too early to start saving. We illustrate the incredible power of compound interest and why it's your best friend for long-term growth.",
    date: "October 12, 2023",
    author: "John Smith",
    image: "https://placehold.co/600x400.png",
    imageHint: "growing sapling money"
  },
];

const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))];

export default function NewsPage() {
  const [filter, setFilter] = useState('All');
  const filteredArticles = filter === 'All' ? articles : articles.filter(a => a.category === filter);

  return (
    <div className="bg-background">
       <header className="bg-muted/50 py-24">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">News & Insights</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay up-to-date with the latest in the world of KiwiSaver.
          </p>
        </div>
      </header>
      
      <main className="py-16 container max-w-7xl mx-auto">
        <div className="flex justify-center mb-8 flex-wrap gap-2">
            {categories.map(category => (
                <Button 
                    key={category} 
                    variant={filter === category ? 'default' : 'outline'}
                    onClick={() => setFilter(category)}
                >
                    {category}
                </Button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <Card key={article.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image 
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={article.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                <CardTitle className="font-headline text-xl leading-snug">
                  <Link href="#" className="hover:text-primary transition-colors">{article.title}</Link>
                </CardTitle>
                <p className="text-muted-foreground mt-2 text-sm">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 text-sm text-muted-foreground">
                <p>{article.author} &middot; {article.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
