import { Redis } from "ioredis";
import config from "../app/config";

const redisClient = () => {
  const redisUrl = config.redisUrl as string;
  if (redisUrl) {
    return redisUrl;
  }
  throw new Error("Redis connection failed!");
};

export const redis = new Redis(redisClient());
