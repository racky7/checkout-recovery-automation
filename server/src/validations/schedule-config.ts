import { z } from "zod";

export const scheduleConfigValidation = z.object({
  recoveryIntervals: z.array(
    z.object({
      intervalInMinutes: z.number(),
    })
  ),
});

export const scheduleConfigUpdateValidation = z.object({
  customerId: z.number(),
  recoveryIntervalMinutes: z.array(z.number()),
});
