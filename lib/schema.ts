import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30),
  address: z.string().trim().min(5, "Please enter your address").max(300),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
