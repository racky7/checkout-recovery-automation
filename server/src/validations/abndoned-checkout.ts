import { z } from "zod";

export const abandonedCheckoutValidation = z.object({
  customer: z
    .object({
      customer_id: z.number(),
      first_name: z.string(),
      last_name: z.string(),
      email: z.string().email(),
    })
    .required(),
  abandoned_checkout_url: z.string().url(),
  created_at: z.date(),
});
