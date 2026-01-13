import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  mlServiceUrl: process.env.ML_SERVICE_URL
};