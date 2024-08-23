import { Schema } from "mongoose";
declare const ScheduleConfig: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    recoveryIntervals: import("mongoose").Types.DocumentArray<{
        intervalInMinutes: number;
    }>;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    recoveryIntervals: import("mongoose").Types.DocumentArray<{
        intervalInMinutes: number;
    }>;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    recoveryIntervals: import("mongoose").Types.DocumentArray<{
        intervalInMinutes: number;
    }>;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    recoveryIntervals: import("mongoose").Types.DocumentArray<{
        intervalInMinutes: number;
    }>;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    recoveryIntervals: import("mongoose").Types.DocumentArray<{
        intervalInMinutes: number;
    }>;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    customerId: number;
    recoveryIntervals: import("mongoose").Types.DocumentArray<{
        intervalInMinutes: number;
    }>;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default ScheduleConfig;
