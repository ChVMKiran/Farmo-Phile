import { predictCrop, predictYield } from "../services/ml.service.js";
import { recommendFertilizer } from "../services/fertilizer.service.js";
import { recommendCropRotation } from "../services/cropRotation.service.js";

export async function handleCropPrediction(req, res, next) {
    try {
        const result = await predictCrop(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export async function handleYieldPrediction(req, res, next) {
    try {
        const result = await predictYield(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export function handleFertilizerRecommendation(req, res, next) {
    try {
        const result = recommendFertilizer(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export function handleCropRotation(req, res, next) {
    try {
        const result = recommendCropRotation(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
}