import { z } from "zod";

export const orderValidation = z.object({
  order: z.object({
    id: z.number(),
    created_at: z.string(),
    customer: z.object({
      id: z.number(),
    }),
  }),
});
