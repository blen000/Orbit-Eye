'use server';
/**
 * @fileOverview A FAQ Generation AI agent.
 *
 * - generateFaqs - A function that generates FAQs based on categorized questions.
 * - FaqInput - The input type for the generateFaqs function.
 * - FaqOutput - The return type for the generateFaqs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqInputSchema = z.object({
  category: z.string().describe('The category of the FAQs.'),
  questions: z.array(z.string()).describe('A list of frequently asked questions.'),
});
export type FaqInput = z.infer<typeof FaqInputSchema>;

const FaqOutputSchema = z.object({
  faqs: z.array(
    z.object({
      question: z.string().describe('The question.'),
      answer: z.string().describe('The answer.'),
    })
  ).describe('A list of frequently asked questions with answers.'),
});
export type FaqOutput = z.infer<typeof FaqOutputSchema>;

export async function generateFaqs(input: FaqInput): Promise<FaqOutput> {
  return generateFaqsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqPrompt',
  input: {schema: FaqInputSchema},
  output: {schema: FaqOutputSchema},
  prompt: `You are an expert at generating FAQs based on a list of questions.

  Generate a list of FAQs with questions and answers based on the following questions for the category: {{{category}}}.

  Here are the questions:
  {{#each questions}}
  - {{{this}}}
  {{/each}}
  `,
});

const generateFaqsFlow = ai.defineFlow(
  {
    name: 'generateFaqsFlow',
    inputSchema: FaqInputSchema,
    outputSchema: FaqOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
