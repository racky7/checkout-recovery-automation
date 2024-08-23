import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res
    .send(200)
    .json({ success: true, messsage: "Schedule config updated successfully" });
};
