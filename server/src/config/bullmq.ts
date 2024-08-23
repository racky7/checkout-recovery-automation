import { Redis } from "ioredis";
import { bmqQueue, redisDbUri } from "./env";
import { Queue } from "bullmq";

export const redisConfig = new Redis(redisDbUri, {
  maxRetriesPerRequest: null,
});

export const messageQueue = new Queue(bmqQueue, {
  connection: redisConfig,
  defaultJobOptions: {
    removeOnComplete: true,
  },
});
