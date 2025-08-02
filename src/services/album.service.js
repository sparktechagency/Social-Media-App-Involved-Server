const httpStatus = require("http-status");
const { Album } = require("../models");
const ApiError = require("../utils/ApiError");


const createAlbum = async (albumData, userId) => {
    // titile and user if not exists both check
    const findSameNameIsExists = await Album.find({ title: albumData.title, user: userId });
    if (findSameNameIsExists.length > 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Album already exists");
    }
    albumData.user = userId;
    const album = await Album.create(albumData);
    return album;
};

const setAlbumItems = async (albumData, userId) => {
    // find() returns an array, but you need a single document for this operation
    const album = await Album.findOne({ _id: albumData.albumId, user: userId });

    if (!album) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Album not found");
    }

    if (album.events.includes(albumData.eventId)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Event already exists");
    }
    // Push the eventId into the events array
    album.events.push(albumData.eventId);

    // Save and return the updated album
    const updatedAlbum = await album.save();
    return updatedAlbum;
};

const getAllAlbums = async (userId) => {

    const albums = await Album.find({ user: userId }).populate("events" ,);
    if (!albums) {
        throw new ApiError(httpStatus.NOT_FOUND, "Album not found");
    }
    return albums;
};

module.exports = {
    createAlbum,
    setAlbumItems,
    getAllAlbums
};