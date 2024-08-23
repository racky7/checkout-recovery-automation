import { z } from "zod";
export declare const abandonedCheckoutValidation: z.ZodObject<{
    customer: z.ZodObject<{
        customer_id: z.ZodNumber;
        first_name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
        customer_id: number;
        first_name: string;
        last_name: string;
    }, {
        email: string;
        customer_id: number;
        first_name: string;
        last_name: string;
    }>;
    abandoned_checkout_url: z.ZodString;
    created_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    customer: {
        email: string;
        customer_id: number;
        first_name: string;
        last_name: string;
    };
    abandoned_checkout_url: string;
    created_at: Date;
}, {
    customer: {
        email: string;
        customer_id: number;
        first_name: string;
        last_name: string;
    };
    abandoned_checkout_url: string;
    created_at: Date;
}>;
