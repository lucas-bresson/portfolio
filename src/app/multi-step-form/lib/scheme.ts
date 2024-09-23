import { z } from 'zod';

const phoneRegex = new RegExp(/^\+?[0-9\s()\-.]{7,}$/);

export const FormDataSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  email: z
    .string()
    .min(1, 'This field is required')
    .email('Invalid email address'),
  // .trim()
  phone: z
    .string()
    .min(1, 'This field is required')
    .regex(phoneRegex, 'Invalid phone number'),
  plan: z.enum(['arcade', 'advanced', 'pro']),
  subscription: z.enum(['monthly', 'yearly']).default('monthly'),
  online: z.boolean(),
  storage: z.boolean(),
  customizable: z.boolean(),
});
