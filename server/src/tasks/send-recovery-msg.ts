import { z } from "zod";
import AbandonedCheckout from "../models/abandoned-checkout";
import { getCustomerScheduleConfig } from "../services/schedule-config";
import enqueueMessage from "../services/enqueue-message";
import { addMinutesToDate } from "../utils/date";

const recoveryTaskConfig = z.object({
  customerId: z.number().min(1),
  customerEmail: z.string().email(),
  emailNotification: z.string(),
  notificationCount: z.number(),
});
export async function sendRecoveryMsg(task: any) {
  const { customerId, customerEmail, emailNotification } =
    recoveryTaskConfig.parse(task);

  const checkout = await AbandonedCheckout.findOne({
    customer_id: customerId,
  });

  if (!checkout) {
    throw new Error("Abandoned checkout not found");
  }

  if (checkout.orderCompleted) {
    console.log("Abandoned checkout already completed");
    return;
  }

  // TODO: Send email notification
  console.log(`Email notification sent to customer - ${customerId}`);

  // Update the abandoned checkout
  await checkout.updateOne(
    { customerId },
    { $inc: { notificationCount: 1 }, lastNotificationSentAt: Date.now() }
  );

  // TODO: Store the sent notification in database

  // TODO: Enqueue next recovery message
  const { recoveryIntervals } = await getCustomerScheduleConfig(customerId);
  console.log(
    "recovery intervals during task processing ",
    JSON.stringify(recoveryIntervals)
  );

  if (recoveryIntervals.length > checkout.notificationCount) {
    const nextInterval =
      recoveryIntervals[checkout.notificationCount].intervalInMinutes;
    const nextDelayInMs = addMinutesToDate(
      checkout.checkoutInitiatedAt,
      nextInterval
    ).durationMs;
    const notificationData = {
      customerId,
      customerEmail,
      emailNotification,
      notificationCount: checkout.notificationCount + 1,
    };

    await enqueueMessage(`${customerId}`, notificationData, nextDelayInMs);
  }
}
