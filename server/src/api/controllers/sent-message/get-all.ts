import { Request, Response } from "express";
import SentMessage from "../../../models/sent-message";

export default async (req: Request, res: Response) => {
  const sentMessages = await SentMessage.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    sentMessages,
  });
};
