export declare const getCustomerScheduleConfig: (customerId: number) => Promise<{
    recoveryIntervals: {
        intervalInMinutes: number;
    }[];
}>;
