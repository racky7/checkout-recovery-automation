import { Redis } from "ioredis";
import { Queue } from "bullmq";
export declare const redisConfig: Redis;
export declare const messageQueue: Queue<any, any, string>;
