import { Schema, model } from "mongoose";

const sentMessageSchema = new Schema(
  {
    customerId: {
      type: Number,
      required: true,
    },
    messageSentAt: {
      type: Date,
      required: true,
    },
    messageContent: {
      type: String,
      required: true,
    },
    orderCompletedAfterMessage: {
      type: Boolean,
      default: false,
    },
    completedOrderId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const SentMessage = model("SentMessage", sentMessageSchema);

export default SentMessage;
