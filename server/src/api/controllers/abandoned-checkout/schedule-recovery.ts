import { Request, Response } from "express";
import AbandonedCheckout from "../../../models/abandoned-checkout";
import { abandonedCheckoutValidation } from "../../../validations/abndoned-checkout";
import { getCustomerScheduleConfig } from "../../../services/schedule-config";
import enqueueMessage from "../../../services/enqueue-message";
import { minutesToMs } from "../../../utils/date";

export default async (req: Request, res: Response) => {
  const { customer, abandoned_checkout_url, created_at } =
    abandonedCheckoutValidation.parse(req.body);

  // Check if checkout already exist for customer
  const existingCheckout = await AbandonedCheckout.findOne({
    customerId: customer.id,
  });

  if (existingCheckout) {
    // Remove existing checkout
    await AbandonedCheckout.deleteOne({
      customerId: customer.id,
    });
  }

  // Create new abandoned checkout
  const checkout = new AbandonedCheckout({
    customerId: customer.id,
    customerDetails: {
      firstName: customer.first_name,
      lastName: customer.last_name,
      email: customer.email,
    },
    recoveryLink: abandoned_checkout_url,
    checkoutInitiatedAt: created_at,
  });

  await checkout.save();

  // Get customer schedule recovery config
  const { recoveryIntervals } = await getCustomerScheduleConfig(customer.id);

  // Enqueue message for first recovery interval
  const firstRecoveryInterval = recoveryIntervals[0].intervalInMinutes;
  const delayInMs = minutesToMs(firstRecoveryInterval);
  const notificationData = {
    customerId: customer.id,
    customerEmail: customer.email,
    emailNotification: `Hi ${customer.first_name}, please recover your abandoned checkout. Thank you!`,
    notificationCount: 1,
  };

  await enqueueMessage(`${customer.id}`, notificationData, delayInMs);

  res
    .status(200)
    .json({ success: true, message: "Recovery Scheduled Successfully" });
};
