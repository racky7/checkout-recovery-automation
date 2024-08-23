import ScheduleConfig from "../models/schedule-config";
import { scheduleConfigValidation } from "../validations/schedule-config";

const defaultRecoveryIntervals = [30, 60, 180];

export const getCustomerScheduleConfig = async (customerId: number) => {
  let scheduleConfig = await ScheduleConfig.findOne({ customerId });

  if (!scheduleConfig) {
    // Create a new default schedule configuration if not found
    scheduleConfig = new ScheduleConfig({
      customerId,
      recoveryIntervals: defaultRecoveryIntervals.map((interval) => ({
        intervalInMinutes: interval,
      })),
    });
    await scheduleConfig.save();
  }

  return scheduleConfigValidation.parse(scheduleConfig);
};
