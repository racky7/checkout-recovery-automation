import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const abandonedCheckoutSchema = new Schema(
  {
    customerId: {
      type: Number,
      required: true,
    },
    customerDetails: {
      type: customerSchema,
      required: true,
    },
    checkoutInitiatedAt: {
      type: Date,
      required: true,
    },
    recoveryLink: {
      type: String,
      required: true,
    },
    orderCompleted: {
      type: Boolean,
      default: false,
    },
    lastNotificationSentAt: {
      type: Date,
    },
    notificationCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const AbandonedCheckout = model("AbandonedCheckout", abandonedCheckoutSchema);

export default AbandonedCheckout;
