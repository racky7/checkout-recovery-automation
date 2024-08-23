import { Schema } from "mongoose";
declare const AbandonedCheckout: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
    };
    checkoutInitiatedAt: Date;
    recoveryLink: string;
    orderCompleted: boolean;
    notificationCount: number;
    lastNotificationSentAt?: Date | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
    };
    checkoutInitiatedAt: Date;
    recoveryLink: string;
    orderCompleted: boolean;
    notificationCount: number;
    lastNotificationSentAt?: Date | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
    };
    checkoutInitiatedAt: Date;
    recoveryLink: string;
    orderCompleted: boolean;
    notificationCount: number;
    lastNotificationSentAt?: Date | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
    };
    checkoutInitiatedAt: Date;
    recoveryLink: string;
    orderCompleted: boolean;
    notificationCount: number;
    lastNotificationSentAt?: Date | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
    };
    checkoutInitiatedAt: Date;
    recoveryLink: string;
    orderCompleted: boolean;
    notificationCount: number;
    lastNotificationSentAt?: Date | null | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
    };
    checkoutInitiatedAt: Date;
    recoveryLink: string;
    orderCompleted: boolean;
    notificationCount: number;
    lastNotificationSentAt?: Date | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default AbandonedCheckout;
