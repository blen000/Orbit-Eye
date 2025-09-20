'use server';

import { z } from 'zod';
import { generateFaqs, FaqOutput } from '@/ai/flows/faq-assistant';

const FaqBuilderSchema = z.object({
  category: z.string().min(3, 'Category must be at least 3 characters long.'),
  questions: z.string().min(10, 'Please provide at least one question.'),
});

export type FaqBuilderState = {
  message?: string;
  errors?: {
    category?: string[];
    questions?: string[];
  };
  data?: FaqOutput;
};

export async function handleGenerateFaqs(
  prevState: FaqBuilderState,
  formData: FormData
): Promise<FaqBuilderState> {
  const validatedFields = FaqBuilderSchema.safeParse({
    category: formData.get('category'),
    questions: formData.get('questions'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the fields.',
    };
  }
  
  const { category, questions } = validatedFields.data;
  const questionList = questions.split('\n').filter(q => q.trim() !== '');

  if (questionList.length === 0) {
    return {
      errors: {
        questions: ['Please provide at least one valid question.'],
      },
      message: 'No valid questions found.'
    }
  }

  try {
    const output = await generateFaqs({ category, questions: questionList });
    if (output && output.faqs.length > 0) {
      return { message: 'FAQs generated successfully!', data: output };
    } else {
      return { message: 'The AI could not generate FAQs from the provided input.' };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred while generating FAQs.' };
  }
}
