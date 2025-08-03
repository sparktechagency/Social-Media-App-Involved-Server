
const express = require('express');
const router = express.Router();
const { termsConditionController } = require('../../controllers');

router.post('/create', termsConditionController.createTermsCondition);
router.get('/all', termsConditionController.getTermsCondition);

module.exports = router;
