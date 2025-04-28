import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectdb.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse requests coming from req.body

app.get("/", (req, res) => {
  res.send("Hello World! 123");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port", PORT);
});
