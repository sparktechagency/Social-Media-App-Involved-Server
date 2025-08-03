
const express = require("express");
const auth = require("../../middlewares/auth");
const { Notification } = require("../../models");
const catchAsync = require("../../utils/catchAsync");

const router = express.Router();

router
    .get("/all", auth("admin"), catchAsync(async (req, res) => {
        const notifications = await Notification.find().sort({ createdAt: -1 });
        if (!notifications)
            return res.status(404)
                .json({ message: "Notifications not found" });
                
        res.status(200).json(notifications);
    }))

module.exports = router;