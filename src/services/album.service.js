const { Album } = require("../models");


const createAlbum = async (albumData) => {
    const album = await Album.create(albumData);
    return album;
};

const getAllAlbums = async (userId) => {
    const albums = await Album.find({ user: userId });
    return albums;
};

module.exports = {
    createAlbum,
    getAllAlbums
};