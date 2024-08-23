import { z } from "zod";

export const scheduleConfigValidation = z.object({
  recoveryIntervals: z.array(
    z.object({
      intervalInMinutes: z.number(),
    })
  ),
});
