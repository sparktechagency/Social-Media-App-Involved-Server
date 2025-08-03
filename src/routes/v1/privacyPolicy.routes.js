const express = require('express');
const auth = require('../../middlewares/auth');
const { privacyPolicyController } = require('../../controllers');


const router = express.Router();


router
    .post("/privacy-policy", auth("admin"), privacyPolicyController.createPrivacyPolicy)

router
    .get("/privacy-policy", privacyPolicyController.getPrivacyPolicy);

module.exports = router;