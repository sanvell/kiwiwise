
import Link from 'next/link';
import { KiwiWiseLogo } from '@/components/icons/logo';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <KiwiWiseLogo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted guide to making smarter KiwiSaver decisions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Tools</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/compare-funds" className="text-sm text-muted-foreground hover:text-primary">Fund Comparison</Link></li>
              <li><Link href="/calculators" className="text-sm text-muted-foreground hover:text-primary">Calculators</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Learn</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/guides" className="text-sm text-muted-foreground hover:text-primary">KiwiSaver Guides</Link></li>
              <li><Link href="/news" className="text-sm text-muted-foreground hover:text-primary">News & Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} KiwiWise. All rights reserved. Not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
