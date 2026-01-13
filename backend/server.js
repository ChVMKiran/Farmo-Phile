import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import apiRouter from "./routes/index.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors({
    origin: [
        "https://farmo-phile.chvmkiran.me",
        "http://localhost:5173"
    ]
}));
app.use(express.json());

app.get("/api/health", (req, res) => res.sendStatus(200));


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  ipv6Subnet: 56,
});

app.use("/api", limiter);

app.use("/api", apiRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
