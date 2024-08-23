import { Request, Response } from "express";
import ScheduleConfig from "../../../models/schedule-config";
import { scheduleConfigUpdateValidation } from "../../../validations/schedule-config";

export default async (req: Request, res: Response) => {
  const { customerId, recoveryIntervalMinutes } =
    scheduleConfigUpdateValidation.parse(req.body);

  const scheduleConfig = await ScheduleConfig.findOne({ customerId });

  if (!scheduleConfig) {
    return res.status(404).json({
      success: false,
      message: "Schedule config not found",
    });
  }

  await ScheduleConfig.updateOne(
    { customerId },
    {
      recoveryIntervals: recoveryIntervalMinutes.sort().map((interval) => ({
        intervalInMinutes: interval,
      })),
    }
  );

  res.status(200).json({
    success: true,
    message: "Schedule config updated successfully",
  });
};
