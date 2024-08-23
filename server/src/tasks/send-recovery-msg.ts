import { z } from "zod";
import AbandonedCheckout from "../models/abandoned-checkout";
import SentMessage from "../models/sent-message";
import enqueueMessage from "../services/enqueue-message";
import { getCustomerScheduleConfig } from "../services/schedule-config";
import { addMinutesToDate, minutesToMs } from "../utils/date";

const recoveryTaskConfig = z.object({
  customerId: z.number().min(1),
  customerEmail: z.string().email(),
  emailNotification: z.string(),
  notificationCount: z.number(),
});
export async function sendRecoveryMsg(task: any) {
  const { customerId, customerEmail, emailNotification, notificationCount } =
    recoveryTaskConfig.parse(task);

  const checkout = await AbandonedCheckout.findOne({
    customerId,
  });

  if (!checkout) {
    console.log(`No abandoned checkout found for customer - ${customerId}`);
    return;
  }

  if (checkout.orderCompleted) {
    console.log(
      `TASK REJECTED - Order already completed for customer - ${customerId}`
    );
    return;
  }

  // TODO: Send email notification
  console.log(`Email notification sent to customer - ${customerId}`);

  const { recoveryIntervals } = await getCustomerScheduleConfig(customerId);
  const currentDelay =
    recoveryIntervals[notificationCount - 1].intervalInMinutes;
  const emailSentAt = addMinutesToDate(
    checkout.checkoutInitiatedAt,
    currentDelay
  );

  // Update the abandoned checkout
  await AbandonedCheckout.updateOne(
    { customerId },
    { $inc: { notificationCount: 1 }, lastNotificationSentAt: emailSentAt }
  );

  // Store the sent notification in database
  const sentMessage = new SentMessage({
    customerId,
    messageSentAt: emailSentAt,
    messageContent: emailNotification,
  });
  await sentMessage.save();

  // Enqueue next recovery message
  if (recoveryIntervals.length > notificationCount) {
    const nextInterval = recoveryIntervals[notificationCount].intervalInMinutes;
    const nextDelayInMs = minutesToMs(nextInterval) - minutesToMs(currentDelay);
    const notificationData = {
      customerId,
      customerEmail,
      emailNotification,
      notificationCount: notificationCount + 1,
    };

    await enqueueMessage(`${customerId}`, notificationData, nextDelayInMs);
  }
}
