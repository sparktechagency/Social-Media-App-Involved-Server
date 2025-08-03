const httpStatus = require("http-status");
const response = require("../config/response");
const catchAsync = require("../utils/catchAsync");
const { privacyPolicyService } = require("../services");

const createPrivacyPolicy = catchAsync(async (req, res) => {
    const privacyPolicy = await privacyPolicyService.createPrivacyPolicy(req.body);
    res.status(httpStatus.CREATED).json(
        response({
            message: "Privacy Policy Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: privacyPolicy,
        })
    );
});

const getPrivacyPolicy = catchAsync(async (req, res) => {
    const privacyPolicy = await privacyPolicyService.getPrivacyPolicy();

    res.status(httpStatus.OK).json(
        response({
            message: "Privacy Policy",
            status: "OK",
            statusCode: httpStatus.OK,
            data: privacyPolicy,
        })
    );
});

module.exports = {
    createPrivacyPolicy,
    getPrivacyPolicy,
};