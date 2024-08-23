import { Worker } from "bullmq";
import { bmqQueue } from "../config/env";
import { redisConfig } from "../config/bullmq";

export default () => {
  const bmqWorker = new Worker(bmqQueue, async (job) => {}, {
    connection: redisConfig,
  });

  console.log("BullMQ Worker Started");

  return bmqWorker;
};
