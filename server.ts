import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.use(express.json());

app.use("/user", require("./oauth/routeOauth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
