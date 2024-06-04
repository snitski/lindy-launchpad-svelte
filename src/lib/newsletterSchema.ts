import { z } from 'zod';

export const newsletterSchema = z.object({
    email: z.string().email(),
    name: z.string().min(1),
    surname: z.string().min(1),
});

export type NewsletterSchema = typeof newsletterSchema;