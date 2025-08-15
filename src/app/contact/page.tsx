
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd handle form submission here (e.g., send to an API)
        console.log("Form Submitted", { name, email, subject, message });
        setSubmitted(true);
    };

  return (
    <div className="bg-background">
      <header className="bg-muted/50 py-24">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question, feedback, or need support, we're here to help.
          </p>
        </div>
      </header>

      <main className="py-16 container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4">Contact Information</h2>
                    <p className="text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <span className="text-muted-foreground">(09) 123 4567</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <span className="text-muted-foreground">hello@kiwiwise.co.nz</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <span className="text-muted-foreground">123 Queen Street, Auckland CBD, Auckland 1010, New Zealand</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Clock className="h-6 w-6 text-primary" />
                        <span className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</span>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Send us a message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {submitted ? (
                            <div className="text-center p-8">
                                <h3 className="text-2xl font-bold font-headline text-primary">Thank you!</h3>
                                <p className="text-muted-foreground mt-2">Your message has been sent successfully. We'll be in touch soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} />
                                </div>
                                <Button type="submit" className="w-full">Submit</Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
    </div>
  );
}
