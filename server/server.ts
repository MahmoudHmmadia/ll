import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

config();

const app = express();

app.use(cors());

app.use(express.json());

app.post("/auth", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === "admin" && password == "admin123") {
      return res.status(200).json({});
    }

    res.status(401).json({ message: "write a correct username or password" });
  } catch (err) {
    console.log("server error:   ", err);

    res.status(500).json({ message: "server error" });
  }
});

mongoose
  .connect(process.env.DB_URL!)
  .then(() => {
    app.listen(3500, () => {
      console.log("running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
