import { Router } from "express";
import {
    handleCropPrediction,
    handleYieldPrediction,
    handleFertilizerRecommendation,
    handleCropRotation,
} from "../controllers/prediction.controller.js";

const router = Router();

router.post("/crop", handleCropPrediction);
router.post("/predict-yield", handleYieldPrediction);
router.post("/fertilizer-recommend", handleFertilizerRecommendation);
router.post("/crop-rotation", handleCropRotation);

export default router;