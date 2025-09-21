import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, HeartPulse, Stethoscope } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { doctors, services, testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function getImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id);
}

export default function HomePage() {
  const heroImage = getImage('hero');
  const aboutImage = getImage('about');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh]">
        {heroImage && (
          <Image
            src="/2.jpg"
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Your Vision, Our Focus
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Experience world-class eye care with a personal touch. Our dedicated team is here to help you see the world more clearly.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
            <Link href="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Welcome to Orbit Eye Clinic
            </h2>
            <p className="text-lg text-muted-foreground">
              Our mission is to provide comprehensive and compassionate eye care to our community. We believe in building lasting relationships with our patients, founded on trust and clinical excellence.
            </p>
            <p className="text-muted-foreground">
              At Orbit Eye Clinic, we combine state-of-the-art technology with a patient-first approach. From routine exams to complex surgeries, your visual health is our utmost priority.
            </p>
            <Button asChild variant="link" className="p-0 text-primary">
              <Link href="/team">Meet Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              We are committed to providing you with an exceptional healthcare experience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <CardTitle className="pt-4">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our board-certified ophthalmologists are leaders in their fields, dedicated to continuous learning and excellence.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="pt-4">Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We invest in the latest diagnostic and surgical equipment to ensure accurate diagnoses and superior outcomes.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <CardTitle className="pt-4">Patient-Centered Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We listen to your concerns and create personalized treatment plans that respect your needs and preferences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Offering a full spectrum of eye care services to meet all your needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const serviceImage = getImage(service.imageId);
              return (
                <Card key={service.id} className="overflow-hidden">
                  {serviceImage && (
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.shortDescription}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              What Our Patients Say
            </h2>
          </div>
          <Carousel
            opts={{ align: 'start' }}
            className="mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                        <p className="mt-4 font-bold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
