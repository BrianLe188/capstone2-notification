import express from "express";
import UserCtrl from "../oauth/userCtrl";

const router = express.Router();

router.get("/mailing", UserCtrl.notification);

module.exports = router;
