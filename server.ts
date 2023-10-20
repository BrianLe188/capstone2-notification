import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.use(express.json());

app.use("/user", require("./src/oauth/routeOauth"));

// access /user/mailing to send mail

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
