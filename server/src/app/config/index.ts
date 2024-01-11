import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  mongodbUri: process.env.MONGODB_URI,
  mongodbCompass: process.env.MONGODB_COMPASS,
  cloudinariUrl: process.env.CLOUDINARY_URL,
  redisUrl: process.env.REDIS_URL,
  accesKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
};
