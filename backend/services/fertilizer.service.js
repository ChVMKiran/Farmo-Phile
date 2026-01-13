import AppError from "../models/appError.js";

export function recommendFertilizer(payload) {
    const { crop, nitrogen, phosphorus, potassium, ph } = payload;

    if (
        !crop ||
        nitrogen === undefined ||
        phosphorus === undefined ||
        potassium === undefined ||
        ph === undefined
    ) {
        throw new AppError("Missing required fields", 400);
    }

    let recommendation = [];
    let reason = [];

    if (nitrogen < 50) {
        recommendation.push("Urea");
        reason.push("Nitrogen level is low");
    }

    if (phosphorus < 30) {
        recommendation.push("DAP");
        reason.push("Phosphorus level is low");
    }

    if (potassium < 40) {
        recommendation.push("MOP");
        reason.push("Potassium level is low");
    }

    if (crop.toLowerCase() === "rice") {
        recommendation.push("Urea");
        reason.push("Rice requires high nitrogen for vegetative growth");
    }

    if (crop.toLowerCase() === "pulses") {
        recommendation = recommendation.filter((f) => f !== "Urea");
        reason.push("Pulses fix nitrogen naturally");
    }

    if (ph < 5.5) {
        recommendation.push("Lime");
        reason.push("Soil is acidic");
    } else if (ph > 8.0) {
        recommendation.push("Gypsum");
        reason.push("Soil is alkaline");
    }

    if (recommendation.length === 0) {
        recommendation.push("No Fertilizer needed");
    }

    recommendation = [...new Set(recommendation)];

    return {
        recommended_fertilizers: recommendation,
        reason: reason.join("; "),
    };
}