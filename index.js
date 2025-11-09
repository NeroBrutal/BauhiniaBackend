import winston from "winston";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes/v1/index.route.js";
import connectDB from "./src/start/db.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  allowEIO3: true,
  cors: { origin: "*" },
});

const socketList = {};

connectDB();
app.use("/api", routes);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5173;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
