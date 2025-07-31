const httpStatus = require("http-status");
const { Album } = require("../models");
const ApiError = require("../utils/ApiError");


const createAlbum = async (albumData) => {
    const album = await Album.create(albumData);
    return album;
};

const getAllAlbums = async (userId) => {
    const albums = await Album.find({ user: userId }).populate("events");
    if (!albums) {
        throw new ApiError(httpStatus.NOT_FOUND, "Album not found");
    }
    return albums;
};

module.exports = {
    createAlbum,
    getAllAlbums
};


