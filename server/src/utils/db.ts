import mongoose from "mongoose";
import config from "../app/config";
const util = require("util");
const debugLog = util.debuglog("server");

const connectDB = async () => {
  try {
    await mongoose
      .connect(config.mongodbCompass as string)
      .then((data: any) => {
        console.log(`Database Connected with ${data?.connection?.host}`);
      });
  } catch (error: any) {
    console.log(error?.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
