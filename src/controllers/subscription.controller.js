const httpStatus = require("http-status");
const response = require("../config/response");
const catchAsync = require("../utils/catchAsync");
const { subscriptionService } = require("../services");

const createSubscription = catchAsync(async (req, res) => {

    const subscription = await subscriptionService.createSubscription(req.body);
    res.status(httpStatus.CREATED).json(
        response({
            message: "Subscription Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: subscription,
        })
    );
});

const getAllSubscriptions = catchAsync(async (req, res) => {
    const subscriptions = await subscriptionService.getAllSubscriptions();
    res.status(httpStatus.OK).json(
        response({
            message: "All Subscriptions",
            status: "OK",
            statusCode: httpStatus.OK,
            data: subscriptions,
        })
    );
});

const getSingleSubscription = catchAsync(async (req, res) => {
    const subscription = await subscriptionService.getSingleSubscription(req.params.id);
    res.status(httpStatus.OK).json(
        response({
            message: "Single Subscription",
            status: "OK",
            statusCode: httpStatus.OK,
            data: subscription,
        })
    );
});

const updateSubscription = catchAsync(async (req, res) => {
    const subscription = await subscriptionService.updateSubscription(req.params.id, req.body);
    res.status(httpStatus.OK).json(
        response({
            message: "Subscription Updated",
            status: "OK",
            statusCode: httpStatus.OK,
            data: subscription,
        })
    );
});

const deleteSubscription = catchAsync(async (req, res) => {
    const subscription = await subscriptionService.deleteSubscription(req.params.id);
    res.status(httpStatus.OK).json(
        response({
            message: "Subscription Deleted successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: subscription,
        })
    );
});

module.exports = {
    createSubscription,
    getAllSubscriptions,
    getSingleSubscription,
    updateSubscription,
    deleteSubscription
};

