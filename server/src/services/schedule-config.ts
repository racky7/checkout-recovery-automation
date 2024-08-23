import ScheduleConfig from "../models/schedule-config";
import { DEFAULT_RECOVERY_INTERVALS } from "../utils/constants";
import { scheduleConfigValidation } from "../validations/schedule-config";

export const getCustomerScheduleConfig = async (customerId: number) => {
  let scheduleConfig = await ScheduleConfig.findOne({ customerId });

  if (!scheduleConfig) {
    // Create a new default schedule configuration if not found
    scheduleConfig = new ScheduleConfig({
      customerId,
      recoveryIntervals: DEFAULT_RECOVERY_INTERVALS.map((interval) => ({
        intervalInMinutes: interval,
      })),
    });
    await scheduleConfig.save();
  }

  return scheduleConfigValidation.parse(scheduleConfig);
};
