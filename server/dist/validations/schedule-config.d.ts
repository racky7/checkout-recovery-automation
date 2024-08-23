import { z } from "zod";
export declare const scheduleConfigValidation: z.ZodObject<{
    recoveryIntervals: z.ZodArray<z.ZodObject<{
        intervalInMinutes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        intervalInMinutes: number;
    }, {
        intervalInMinutes: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    recoveryIntervals: {
        intervalInMinutes: number;
    }[];
}, {
    recoveryIntervals: {
        intervalInMinutes: number;
    }[];
}>;
