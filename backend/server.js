import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import apiRouter from "./routes/index.js";
import errorHandler from "./middlewares/error.middleware.js"

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    ipv6Subnet: 56,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(limiter);

app.use("/api", apiRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});