
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { aboutUsService } = require("../services");

const createAboutUs = catchAsync(async (req, res) => {
    const aboutUs = await aboutUsService.createAboutUs(req.body);
    res.status(httpStatus.CREATED).json(
        response({
            message: "About Us Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: aboutUs,
        })
    );
});

const getAboutUs = catchAsync(async (req, res) => {
    const aboutUs = await aboutUsService.getAboutUs();

    res.status(httpStatus.OK).json(
        response({
            message: "About Us",
            status: "OK",
            statusCode: httpStatus.OK,
            data: aboutUs,
        })
    );
});

module.exports = {
    createAboutUs,
    getAboutUs,
};