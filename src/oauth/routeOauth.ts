import express from "express";
import UserCtrl from "../oauth/userCtrl";

const router = express.Router();

router.post("/mailing", UserCtrl.forgotPassword);

module.exports = router;
