const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { subscriptionController } = require('../../controllers');
const { subscriptionValidation } = require('../../validations');

const router = express.Router();

router
    .post('/create', auth('admin'),
        validate(subscriptionValidation.createSubscription),
        subscriptionController.createSubscription
    );
router
    .get('/all',
        auth('common'),
        subscriptionController.getAllSubscriptions);

router
    .get('/single/:id',
        auth('common'),
        subscriptionController.getSingleSubscription);

router
    .patch('/update/:id',
        auth('admin'),
        subscriptionController.updateSubscription
    );

router
    .delete('/delete/:id',
        auth('admin'),
        subscriptionController.deleteSubscription
    );

module.exports = router;