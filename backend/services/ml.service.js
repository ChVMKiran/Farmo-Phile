import axios from "axios";
import AppError from "../models/appError.js";
import config from "../config/index.js";

const ML_SERVICE_URL = config.mlServiceUrl || "http://localhost:5000";

async function postToMl(path, payload) {
    try {
        const response = await axios.post(`${ML_SERVICE_URL}${path}`, payload);
        return response.data;
    } catch (err) {
        if (err.response) {
            const status = err.response.status || 502;
            const message =
                err.response.data?.error || "ML service returned an error";
            throw new AppError(message, status, err.response.data);
        }

        throw new AppError("ML service unreachable", 502, err.message);
    }
}

export async function predictCrop(payload) {
    return postToMl("/crop", payload);
}

export async function predictYield(payload) {
    return postToMl("/yield", payload);
}