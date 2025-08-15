
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "KiwiSaver in 2025: Budget Changes You Need to Know",
    description: "Understand the key KiwiSaver changes from the 2025 budget and learn how to benefit from them.",
};

export default function BudgetChangesPage() {
    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-3xl mx-auto">
                <header className="mb-8">
                     <Link href="/news" className="flex items-center text-primary hover:underline mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to News
                    </Link>
                    <h1 className="font-headline text-3xl md:text-4xl font-bold mb-3">KiwiSaver in 2025: Budget Changes You Need to Know (And How to Benefit)</h1>
                    <p className="text-muted-foreground text-sm">Published on November 1, 2023 by Duck Bell</p>
                </header>
                
                <Image
                    src="https://placehold.co/800x400.png"
                    alt="Parliament building"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mb-8"
                    data-ai-hint="parliament building"
                />

                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <p className="lead">The 2025 Budget has introduced several significant changes to KiwiSaver. Here's what you need to know and how to make the most of these adjustments to secure your financial future.</p>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Key Changes at a Glance</h2>

                    <h3 className="font-headline text-xl font-semibold mt-6 mb-2">1. Government Contribution Reduction</h3>
                    <p>Starting 1 July 2025, the government's annual contribution will decrease from 50 cents to <strong>25 cents</strong> for each dollar you contribute. This reduces the maximum government top-up you can receive from $521.43 to <strong>$260.72</strong> per year.</p>

                    <h3 className="font-headline text-xl font-semibold mt-6 mb-2">2. Contribution Rate Increases</h3>
                    <p>Default employee and employer contribution rates will rise in two stages:</p>
                    <ul className="list-disc pl-5">
                        <li>To <strong>3.5%</strong> on 1 April 2026</li>
                        <li>To <strong>4%</strong> on 1 April 2028</li>
                    </ul>
                     <p>This means more of your pay will go into your KiwiSaver, and your employer will match the higher rate.</p>

                    <h3 className="font-headline text-xl font-semibold mt-6 mb-2">3. Eligibility Changes for Young People</h3>
                    <p>Eligibility for both employer and government contributions will be extended to 16- and 17-year-olds starting from 1 April 2026, encouraging earlier saving habits.</p>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">How to Benefit from These Changes</h2>
                     <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Maximize Your Contributions:</strong> To get the new maximum government contribution of $260.72, you now need to contribute at least <strong>$1,042.86</strong> annually (about $20.06 per week). Check your contributions to make sure you don't miss out.</li>
                        <li><strong>Adjust Your Contribution Rate:</strong> If your budget allows, consider increasing your contribution rate to align with the new defaults. This maximizes your employer's matching contribution and accelerates your savings.</li>
                        <li><strong>Review Your Fund Choice:</strong> With changing contribution dynamics, it's a perfect time to review your fund's performance and ensure it aligns with your long-term retirement goals and risk tolerance. A higher-growth fund might be suitable if you have a long time until retirement.</li>
                    </ul>
                    
                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                    <p>These changes present an opportunity to reassess and boost your retirement savings strategy. By staying informed and proactive, you can turn these new KiwiSaver settings to your advantage and stay on track for a comfortable retirement.</p>
                </div>

                <div className="text-center mt-12">
                    <Button asChild>
                        <Link href="/calculators">Use Our Calculators to See Your New Projection</Link>
                    </Button>
                </div>
            </div>
        </article>
    )
}
