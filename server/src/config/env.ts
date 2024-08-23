import { config } from "dotenv";
config();

const { PORT, MONGO_DB_URI, REDIS_DB_URI, BMQ_QUEUE } = process.env;

export const port = PORT || 4000;
export const mongoDbUri = MONGO_DB_URI || "";
export const redisDbUri = REDIS_DB_URI || "";
export const bmqQueue = BMQ_QUEUE || "";
