
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "KiwiSaver Satisfaction Is Up! But What’s Still Missing?",
    description: "Consumer surveys reveal growing satisfaction among KiwiSaver members, but key gaps in understanding and guidance remain.",
};

export default function KiwiSaverSatisfactionPage() {
    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-3xl mx-auto">
                <header className="mb-8">
                    <Link href="/news" className="flex items-center text-primary hover:underline mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to News
                    </Link>
                    <h1 className="font-headline text-3xl md:text-4xl font-bold mb-3">KiwiSaver Satisfaction Is Up! But What’s Still Missing?</h1>
                    <p className="text-muted-foreground text-sm">Published on May 22, 2023 by Duck Bell</p>
                </header>

                <Image
                    src="https://placehold.co/800x400.png"
                    alt="Happy customer giving a thumbs up"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mb-8"
                    data-ai-hint="happy customer survey"
                />

                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <p className="lead">Recent consumer surveys reveal a growing satisfaction among KiwiSaver members. But while more people report positive experiences, gaps remain. How can we make KiwiSaver better for everyone?</p>
                    
                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">The Data: A Positive Trend</h2>
                    <p>According to Consumer NZ, satisfaction rose from 52% to 57% in 2025. Members appreciate better communication from providers, more transparency on fees, and easy-to-use online tools to track their investments.</p>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Where Gaps Remain</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Financial Literacy:</strong> Many members still lack a basic understanding of different investment types and how fund performance impacts their long-term balance.</li>
                        <li><strong>Clarity on Fees:</strong> While improving, hidden or confusing fee structures can still reduce trust and make it hard to compare providers effectively.</li>
                        <li><strong>Personalized Guidance:</strong> Access to personalized financial advice is still limited for many everyday Kiwis, leaving them to make important decisions on their own.</li>
                    </ul>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">How We Can Improve</h2>
                    <p>To truly empower savers, the industry needs to focus on:</p>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Better Education Tools:</strong> Interactive guides, videos, and calculators can help members understand their funds and make better choices.</li>
                        <li><strong>Transparent Communication:</strong> Clear, simple reporting on fees and fund performance builds trust and facilitates comparison.</li>
                        <li><strong>Accessible Guidance:</strong> Digital advice tools and clear pathways to human advisers can help bridge the guidance gap.</li>
                    </ul>

                    <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                    <p>While rising satisfaction is a great sign, there's more work to do. With a continued focus on better guidance, education, and clarity, KiwiSaver can become an even more powerful tool for all New Zealanders.</p>
                </div>
                 <div className="text-center mt-12">
                    <Button asChild>
                        <Link href="/guides">Explore Our KiwiSaver Guides</Link>
                    </Button>
                </div>
            </div>
        </article>
    )
}
