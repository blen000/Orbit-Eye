'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleGenerateFaqs, FaqBuilderState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState: FaqBuilderState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Generate FAQs
    </Button>
  );
}

export default function FaqBuilderPage() {
  const [state, formAction] = useFormState(handleGenerateFaqs, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.errors ? 'Error' : 'Success',
        description: state.message,
        variant: state.errors ? 'destructive' : 'default',
      });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>FAQ Generator</CardTitle>
          <CardDescription>
            Enter a category and a list of questions (one per line) to generate FAQs using AI.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="category">FAQ Category</Label>
              <Input id="category" name="category" placeholder="e.g., Insurance, LASIK Surgery" />
              {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="questions">Questions</Label>
              <Textarea
                id="questions"
                name="questions"
                placeholder="What is the recovery time for LASIK?&#10;Is the procedure painful?&#10;How much does it cost?"
                rows={10}
              />
              {state.errors?.questions && <p className="text-sm text-destructive">{state.errors.questions[0]}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated FAQs</CardTitle>
          <CardDescription>The generated questions and answers will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          {state.data?.faqs ? (
            <Accordion type="single" collapsible className="w-full">
              {state.data.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="flex h-64 items-center justify-center rounded-md border border-dashed text-center">
              <p className="text-muted-foreground">FAQs will be shown here after generation.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
