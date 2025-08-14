import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BarChart2, Home, UserCheck, Leaf, CircleDollarSign, Banknote, Shuffle } from "lucide-react";
import Link from "next/link";

const guides = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "KiwiSaver 101",
    description: "New to KiwiSaver? Start here to learn the fundamentals of how it works.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Choosing Your Fund",
    description: "Understand the differences between defensive, conservative, balanced, growth, and aggressive funds.",
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "First Home Withdrawal",
    description: "Learn how you can use your KiwiSaver to help buy your first home.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Planning for Retirement",
    description: "Discover strategies to maximize your savings for a comfortable retirement.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Ethical & Responsible Investing",
    description: "What it means to invest ethically and how to find funds that align with your values.",
  },
  {
    icon: <CircleDollarSign className="h-8 w-8 text-primary" />,
    title: "Understanding Fees",
    description: "Fees can significantly impact your returns. Learn what to look for.",
  },
  {
    icon: <Banknote className="h-8 w-8 text-primary" />,
    title: "KiwiSaver & Tax",
    description: "A simple breakdown of how your KiwiSaver contributions and earnings are taxed.",
  },
  {
    icon: <Shuffle className="h-8 w-8 text-primary" />,
    title: "Switching Providers",
    description: "Thinking of switching? Here's what you need to know before you make a move.",
  },
];

export default function GuidesPage() {
  return (
    <div className="bg-background">
       <header className="bg-muted/50 py-24">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">KiwiSaver Guides</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your comprehensive library for mastering KiwiSaver.
          </p>
        </div>
      </header>

      <main className="py-16 container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
                <Link href="#" key={guide.title}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-center gap-4">
                         <div className="bg-primary/10 rounded-full p-3 w-fit">
                            {guide.icon}
                        </div>
                        <div className="flex-1">
                            <CardTitle className="font-headline text-lg">{guide.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            {guide.description}
                        </CardDescription>
                    </CardContent>
                </Card>
                </Link>
            ))}
        </div>
      </main>
    </div>
  );
}
