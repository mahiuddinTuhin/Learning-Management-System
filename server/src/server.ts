import app from "./app";
import config from "./app/config";
import connectDB from "./utils/db";

app.listen(config.port, async () => {
  console.log(
    "\x1b[35m%s\x1b[0m",
    `Server is connected with port: ${config.port}`
  );
  await connectDB();
});
