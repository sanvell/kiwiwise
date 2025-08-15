
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Why Is My KiwiSaver Not Growing? The Inflation Trap Explained",
    description: "Learn why your KiwiSaver balance might not be growing in real terms and how to combat inflation erosion.",
};

export default function InflationTrapPage() {
    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-3xl mx-auto">
                <header className="mb-8">
                    <Link href="/news" className="flex items-center text-primary hover:underline mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to News
                    </Link>
                    <h1 className="font-headline text-3xl md:text-4xl font-bold mb-3">Sounds Great, but Why Is My KiwiSaver Not Growing? The Inflation Trap Explained</h1>
                    <p className="text-muted-foreground text-sm">Published on November 2, 2023 by Sarah Jones</p>
                </header>

                 <Image
                    src="https://placehold.co/800x400.png"
                    alt="Graph showing inflation impact"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mb-8"
                    data-ai-hint="inflation graph"
                />

                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <p className="lead">You’ve been contributing to your KiwiSaver for years, watching your balance grow steadily. But when you adjust for inflation, your purchasing power feels stagnant. Why?</p>
                    
                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">The Inflation Reality</h2>
                    <p>Between 2021 and 2025, the average KiwiSaver balance increased from approximately $26,000 to just under $35,000. However, after accounting for inflation, the real value of these balances has remained relatively flat.</p>
                    
                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Understanding the Impact</h2>
                    <p>Inflation erodes the purchasing power of money over time. Even if your KiwiSaver balance grows in nominal terms, if inflation outpaces this growth, your ability to purchase goods and services diminishes.</p>

                    <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                        "If your KiwiSaver returns are 4% but inflation is 5%, you've effectively lost 1% of your purchasing power."
                    </blockquote>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Strategies to Combat Inflation Erosion</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Opt for Growth-Oriented Funds:</strong> Higher-risk funds have historically outpaced inflation over the long term. A well-diversified growth fund can provide the returns needed to stay ahead.</li>
                        <li><strong>Increase Your Contributions:</strong> Even a small increase in your contribution rate can significantly impact your final balance, helping to offset the effects of inflation over many years.</li>
                        <li><strong>Review Your Fund Regularly:</strong> Don't set and forget. Ensure your investment strategy aligns with your retirement goals and risk tolerance, and adjust as your circumstances change.</li>
                    </ul>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                    <p>While KiwiSaver is a valuable tool for retirement savings, it's essential to consider inflation's impact. By making informed decisions and adjusting your strategy, you can ensure your savings grow not just in numbers, but in real-world value.</p>
                </div>
                 <div className="text-center mt-12">
                    <Button asChild>
                        <Link href="/guides/choosing-your-fund">Choose the Right Fund for You</Link>
                    </Button>
                </div>
            </div>
        </article>
    )
}
