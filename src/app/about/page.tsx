import { KiwiWiseLogo } from "@/components/icons/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Eye } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <header className="bg-muted/50 py-24">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About KiwiWise</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Empowering New Zealanders to make smarter KiwiSaver decisions.
          </p>
        </div>
      </header>

      <main className="py-16 container max-w-5xl mx-auto">
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
                <p className="text-muted-foreground">
                    KiwiWise was founded on a simple belief: every New Zealander deserves to understand their KiwiSaver and feel confident about their financial future. We saw a gap for clear, unbiased, and easy-to-access information in an industry often filled with jargon and complexity.
                </p>
                <p className="text-muted-foreground">
                    Our team is a passionate group of financial enthusiasts, designers, and developers dedicated to demystifying KiwiSaver. We're not financial advisors; we're educators and tool-builders committed to giving you the power to choose what's best for you.
                </p>
            </div>
            <div>
                 <Image
                    src="https://placehold.co/500x350.png"
                    alt="KiwiWise team working together"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="team collaboration"
                  />
            </div>
        </section>

        <section className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Mission & Vision</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                            <Target className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline pt-4">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            To provide every Kiwi with the knowledge and tools to confidently manage their KiwiSaver, turning their retirement savings into a source of security and opportunity.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                            <Eye className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline pt-4">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            A future where all New Zealanders are financially literate and empowered to achieve their long-term goals, starting with a well-managed KiwiSaver account.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                            <Users className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline pt-4">Our Values</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Clarity, impartiality, and user empowerment. We believe in providing transparent information without bias, so you can make decisions that are right for you.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
    </div>
  );
}
