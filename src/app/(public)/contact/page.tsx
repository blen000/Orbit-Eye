import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function getImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id);
}

export default function ContactPage() {
  const contactImage = getImage('contact');

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We're here to help. Reach out to us with any questions or to schedule an appointment.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you today?" rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-accent" />
                  <span>123 Vision Avenue, Suite 100<br/>New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 flex-shrink-0 text-accent" />
                  <span>(212) 555-1234</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 flex-shrink-0 text-accent" />
                  <span>contact@orbiteyeclinic.com</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Google Map Placeholder</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
