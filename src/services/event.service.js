const httpStatus = require("http-status");
const { Event, User, Notification } = require("../models");
const ApiError = require("../utils/ApiError");

const createEvent = async (data) => {
    const event = await Event.create(data);
 

    const notification = await Notification.create({
        title: "New Event Created Requested successfully",
        content: "New Event Created Requested successfully",
        routeringPath: "event",
        userId: event.createdBy,
    });

    return event;
};

const getAllEvents = async (searchPearms) => {

    if (searchPearms) {
        const events = await Event.find({ category: searchPearms });
        return events;
    }
    const events = await Event.find();
    return events;
};


const getSingleEvent = async (id) => {
    const event = await Event.findById(id);
    return event;
};

const filterEvent = async (data) => {
    const events = await Event.find({
        location: data.location,
        category: data.category,
        eventDate: data.eventDate
    });
    if (!events) {
        throw new ApiError(httpStatus.BAD_REQUEST, "No events found");
    }
    return events;
};


const searchEvent = async (data) => {
    if (!data.title || typeof data.title !== "string") {
        throw new ApiError(httpStatus.BAD_REQUEST, "Search term is required");
    }

    const events = await Event.find({
        title: { $regex: data.title, $options: "i" }, // Partial + case-insensitive
    });

    if (!events || events.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, "No matching events found");
    }

    return events;
};

const interestedEvent = async (userId, id) => {
    const findUserById = await User.findById(userId);
    const filteredEvents = findUserById.interestedEvents.filter((item) => item == id);
    if (filteredEvents) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Event already exists");
    }
    findUserById.interestedEvents.push(id);
    const event = await findUserById.save();
    return event;
};

const goingEvent = async (userId, id) => {
    const findUserById = await User.findById(userId);
    if (findUserById.goingEvents.includes(id)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Event already exists");
    }
    findUserById.goingEvents.push(id);
    const event = await findUserById.save();
    return event;
};

const favoriteEvent = async (userId, id) => {
    const findUserById = await User.findById(userId);


    if (findUserById.bookMarksEvents.includes(id)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Event already exists");
    }

    findUserById.bookMarksEvents.push(id);
    const event = await findUserById.save();
    return event;
};

const getFavoriteEvents = async (userId) => {
    const findUserById = await User.findById(userId).populate("bookMarksEvents");
    if (!findUserById) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return findUserById.bookMarksEvents;
};

const approveEvent = async (id) => {
    const event = await Event.findById(id);
    if (!event) {
        throw new ApiError(httpStatus.NOT_FOUND, "Event not found");
    }
    if (event.isApproved) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Event already approved");
    }
    event.isApproved = true;
    event.isShow = true;
    await event.save();

    return event;
};

const deleteEvent = async (id) => {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
        throw new ApiError(httpStatus.NOT_FOUND, "Event not found");
    }
    return event;
};



module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    filterEvent,
    searchEvent,
    interestedEvent,
    goingEvent,
    favoriteEvent,
    getFavoriteEvents,
    approveEvent,
    deleteEvent
};
