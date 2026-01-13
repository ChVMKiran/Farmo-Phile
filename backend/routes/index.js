import { Router } from "express";
import predictionRoutes from "./prediction.routes.js";

const router = Router();

router.use("/", predictionRoutes);

export default router;