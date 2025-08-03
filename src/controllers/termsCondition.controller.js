const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { termsConditionService } = require("../services");

const createTermsCondition = catchAsync(async (req, res) => {
    const termsCondition = await termsConditionService.createTermsCondition(req.body);
    res.status(httpStatus.CREATED).json(
        response({
            message: "Terms Condition Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: termsCondition,
        })
    );
});

const getTermsCondition = catchAsync(async (req, res) => {
    const termsCondition = await termsConditionService.getTermsCondition();

    res.status(httpStatus.OK).json(
        response({
            message: "Terms Condition",
            status: "OK",
            statusCode: httpStatus.OK,
            data: termsCondition,
        })
    );
});

module.exports = {
    createTermsCondition,
    getTermsCondition,
};