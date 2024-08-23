import { Request, Response } from "express";
import { orderValidation } from "../../../validations/order";
import AbandonedCheckout from "../../../models/abandoned-checkout";
import SentMessage from "../../../models/sent-message";

export default async (req: Request, res: Response) => {
  const {
    order: { id: order_id, customer },
  } = orderValidation.parse(req.body);

  // Check if checkout already exist for customer
  const abandonedCheckout = await AbandonedCheckout.findOne({
    customerId: customer.id,
    orderCompleted: false,
  });

  if (!abandonedCheckout) {
    return;
  }

  // Update the existing abandoned checkout
  await AbandonedCheckout.updateOne(
    {
      customerId: customer.id,
    },
    {
      orderCompleted: true,
    }
  );

  // Find and update the latest sent message
  const latestSentMessage = await SentMessage.findOne({
    customerId: customer.id,
    orderCompletedAfterMessage: false,
  }).sort({ messageSentAt: -1 });

  if (latestSentMessage) {
    await SentMessage.updateOne(
      {
        _id: latestSentMessage._id,
      },
      {
        orderCompletedAfterMessage: true,
        completedOrderId: order_id,
      }
    );
  }

  res
    .status(200)
    .json({ success: true, message: "Recovery Cancelled Successfully" });
};
