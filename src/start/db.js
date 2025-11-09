import mongoose from "mongoose";
import winston from "winston";
import config from "config";

export default function connectDB() {
  const db = `${config.get("dbProtocol")}://${config.get(
    "dbUsername"
  )}:${config.get("dbPassword")}${config.get("dbHost")}/${config.get(
    "dbName"
  )}`;

  mongoose
    .connect(db)
    .then(() => winston.info("✅ Connected to Database..."))
    .catch((err) => winston.error(`❌ Failed to connect: ${err}`));
}
