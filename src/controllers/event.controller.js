const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { eventService } = require("../services");

const createEvent = catchAsync(async (req, res) => {
    // Process uploaded file
    if (req.file) {
        req.body.image = "/public/uploads/events/" + req.file.filename;
    }
    // Set user ID from auth context
    req.body.createdBy = req.user._id;
    
    const event = await eventService.createEvent(req.body);
    res.status(httpStatus.CREATED).json(
        response({
            message: "Event Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: event,
        })
    );
});

const getAllEvents = catchAsync(async (req, res) => {
    const searchPearms = req.query.category;
    console.log(searchPearms);

    const events = await eventService.getAllEvents(searchPearms);
    res.status(httpStatus.OK).json(
        response({
            message: "All Events",
            status: "OK",
            statusCode: httpStatus.OK,
            data: events,
        })
    );
});

const getSingleEvent = catchAsync(async (req, res) => {
    const event = await eventService.getSingleEvent(req.params.id);
    res.status(httpStatus.OK).json(
        response({
            message: "Single Event",
            status: "OK",
            statusCode: httpStatus.OK,
            data: event,
        })
    );
});

const filterEvent = catchAsync(async (req, res) => {
    const events = await eventService.filterEvent(req.body);
    res.status(httpStatus.OK).json(
        response({
            message: "All Events",
            status: "OK",
            statusCode: httpStatus.OK,
            data: events,
        })
    );
});

const searchEvent = catchAsync(async (req, res) => {
    const events = await eventService.searchEvent(req.body);
    res.status(httpStatus.OK).json(
        response({
            message: "All Events",
            status: "OK",
            statusCode: httpStatus.OK,
            data: events,
        })
    );
});

const interestedEvent = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const event = await eventService.interestedEvent(userId, req.params.id);
    res.status(httpStatus.OK).json(
        response({
            message: "Single Event",
            status: "OK",
            statusCode: httpStatus.OK,
            data: event,
        })
    );
});

const goingEvent = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const event = await eventService.goingEvent(userId, req.params.id);
    res.status(httpStatus.OK).json(
        response({
            message: "Single Event",
            status: "OK",
            statusCode: httpStatus.OK,
            data: event,
        })
    );
});

const favoriteEvent = catchAsync(async (req, res) => {

    const userId = req.user._id;
    const event = await eventService.favoriteEvent(userId, req.params.id);
    res.status(httpStatus.OK).json(
        response({
            message: "Single Event",
            status: "OK",
            statusCode: httpStatus.OK,
            data: event,
        })
    );
});

const getFavoriteEvents = catchAsync(async (req, res) => {
    const events = await eventService.getFavoriteEvents(req.user._id);
    res.status(httpStatus.OK).json(
        response({
            message: "Favorite Events",
            status: "OK",
            statusCode: httpStatus.OK,
            data: events,
        })
    );
});

module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    filterEvent,
    searchEvent,
    interestedEvent,
    goingEvent,
    favoriteEvent,
    getFavoriteEvents
};
