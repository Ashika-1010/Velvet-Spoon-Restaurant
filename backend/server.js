import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import app from "./app.js";
import connectDB from "./database/db.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (err) {
    console.log("❌ Server not started because DB connection failed.");
    process.exit(1);
  }
};

startServer();