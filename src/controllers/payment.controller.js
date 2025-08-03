const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { paymentService } = require("../services");

const createPayment = catchAsync(async (req, res) => {
    const payment = await paymentService.createPayment(req.body);
    res.status(httpStatus.CREATED).json(
        response({
            message: "Payment Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: payment,
        })
    );
});

const getAllPayment = catchAsync(async (req, res) => {
    const payment = await paymentService.getAllPayment();
    res.status(httpStatus.OK).json(
        response({
            message: "All Payment",
            status: "OK",
            statusCode: httpStatus.OK,
            data: payment,
        })
    );
});

module.exports = {
    createPayment,
    getAllPayment

};