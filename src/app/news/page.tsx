'use client'

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
import { articles } from './articles';

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
