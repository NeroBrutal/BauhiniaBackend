import express from "express";
import { sayHello } from "../../controllers/v1/index.controller.js";

const router = express.Router();

router.get("/", sayHello);

export default router;
