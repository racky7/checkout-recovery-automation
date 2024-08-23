import { Schema, model } from "mongoose";
const recoveryIntervalSchema = new Schema(
  {
    intervalInMinutes: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const recoveryScheduleSchema = new Schema(
  {
    customerId: {
      type: Number,
      required: true,
      index: true,
    },
    recoveryIntervals: {
      type: [recoveryIntervalSchema],
    },
  },
  { timestamps: true }
);

const ScheduleConfig = model("ScheduleConfig", recoveryScheduleSchema);

export default ScheduleConfig;
