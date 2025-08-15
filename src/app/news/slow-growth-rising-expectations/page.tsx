
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Slow Growth, Rising Expectations: Are Kiwis Falling Behind on Retirement?",
    description: "Many Kiwis are struggling to grow their retirement savings at the pace they need. Learn why and what you can do about it.",
};

export default function SlowGrowthPage() {
    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-3xl mx-auto">
                <header className="mb-8">
                    <Link href="/news" className="flex items-center text-primary hover:underline mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to News
                    </Link>
                    <h1 className="font-headline text-3xl md:text-4xl font-bold mb-3">Slow Growth, Rising Expectations: Are Kiwis Falling Behind on Retirement?</h1>
                    <p className="text-muted-foreground text-sm">Published on June 10, 2023 by Duck Bell</p>
                </header>

                <Image
                    src="https://placehold.co/800x400.png"
                    alt="A person looking concerned at a flat growth chart"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mb-8"
                    data-ai-hint="person concerned graph"
                />

                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <p className="lead">KiwiSaver has been a part of New Zealand's financial landscape for 17 years, yet many are finding their retirement savings aren't growing at the pace they need. Are we falling behind on our retirement goals?</p>
                    
                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">The Current Picture</h2>
                    <p>Despite steady contributions, many KiwiSaver members hold balances that may not be sufficient to support a comfortable retirement. Research highlights that a significant portion of members remain in default funds, are inactive, or are under-contributing, leaving them exposed to future financial stress.</p>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Why This Matters Now More Than Ever</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Aging Population:</strong> With life expectancy on the rise, your retirement could last 25–30 years or more, requiring a larger nest egg.</li>
                        <li><strong>Inflation and Costs:</strong> The rising cost of living steadily erodes the future value of savings.</li>
                        <li><strong>The Risk of Inactivity:</strong> Dormant or default accounts miss out on the power of compound growth and may not be aligned with the member's risk profile.</li>
                    </ul>
                    
                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Actionable Advice to Get Ahead</h2>
                     <ol className="list-decimal pl-5 space-y-2">
                        <li><strong>Review Your Contributions:</strong> Even a small increase from 3% to 4% can significantly boost your final balance over the long term. Make sure you're contributing enough to get the full government match.</li>
                        <li><strong>Check Your Fund Choice:</strong> Your fund should align with your age, goals, and risk tolerance. A default fund may not be the best fit.</li>
                        <li><strong>Activate and Consolidate:</strong> If you have old, inactive KiwiSaver accounts, consolidate them into a single account to maximize returns and minimize fees.</li>
                    </ol>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                    <p>New Zealanders can’t afford to be complacent with their retirement savings. By taking proactive steps today—reviewing contributions, choosing the right fund, and staying engaged—you can help close the gap between your retirement expectations and reality.</p>
                </div>
                 <div className="text-center mt-12">
                    <Button asChild>
                        <Link href="/lifestage-kiwisaver">Find the Right Fund For Your Stage</Link>
                    </Button>
                </div>
            </div>
        </article>
    )
}
