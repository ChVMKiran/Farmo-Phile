import { Router } from "express";
import predictionRoutes from "./prediction.routes.js";

const router = Router();

router.get("/health", (req, res) => res.json({ status: "UP",
    uptime: process.uptime(),
    timestamp: Date.now(),
 }));
router.use("/", predictionRoutes);

export default router;