import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { router } from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Initialized in http://localhost:3000`));