const express = require('express');
const { aboutUsController } = require('../../controllers');

const router = express.Router();


router
    .post("/create", aboutUsController.createAboutUs)

router
    .get("/all", aboutUsController.getAboutUs);



module.exports = router;