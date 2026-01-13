import AppError from "../models/appError.js";
import {
    cropCategories,
    seasonCompatibility,
    combinedReasons,
    rotationOrder,
} from "../data/cropRotation.data.js";

function getCropCategory(crop) {
    for (const category in cropCategories) {
        if (cropCategories[category].includes(crop)) {
            return category;
        }
    }
    return null;
}

function getNextCategory(currentCategory) {
    const index = rotationOrder.indexOf(currentCategory);
    if (index === -1) return null;
    return rotationOrder[(index + 1) % rotationOrder.length];
}

export function recommendCropRotation(payload) {
    const { crop, season } = payload;

    if (!crop) {
        throw new AppError("Crop is required", 400);
    }

    const currentCategory = getCropCategory(crop);
    if (!currentCategory) {
        return {
            current_crop: crop,
            season: season || "Not specified",
            recommended_next_crops: ["Pulses"],
            reason: "Pulses are a safe rotation crop to restore soil fertility",
        };
    }

    const nextCategory = getNextCategory(currentCategory) || "pulses";

    const recommendedCrops = cropCategories[nextCategory].filter((candidate) => {
        const allowed = seasonCompatibility[season];
        if (!allowed) return true;
        return allowed.includes(candidate);
    });

    let reason =
        combinedReasons[nextCategory]?.[season] ||
        "These crops are recommended based on crop rotation and seasonal suitability principles.";

    const finalCrops =
        recommendedCrops && recommendedCrops.length > 0
            ? recommendedCrops
            : ["Pulses"];

    if (!recommendedCrops || recommendedCrops.length === 0) {
        reason = "Pulses are a safe rotation crop to restore soil fertility";
    }

    return {
        current_crop: crop,
        season: season || "Not specified",
        recommended_next_crops: finalCrops,
        reason,
    };
}