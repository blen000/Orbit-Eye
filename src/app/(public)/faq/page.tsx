import { faqs } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FaqPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Find answers to common questions about our clinic and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg mb-4 px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-primary">Still have questions?</h2>
            <p className="mt-2 text-muted-foreground">Our team is here to help. Contact us for more information.</p>
            <Button asChild className="mt-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
