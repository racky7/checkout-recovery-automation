import { Worker } from "bullmq";
import { bmqQueue } from "../config/env";
import { redisConfig } from "../config/bullmq";
import { sendRecoveryMsg } from "../tasks/send-recovery-msg";

export default () => {
  const bmqWorker = new Worker(
    bmqQueue,
    async (job) => {
      sendRecoveryMsg(job.data);
    },
    {
      connection: redisConfig,
    }
  );

  console.log("BullMQ Worker Started");

  return bmqWorker;
};
