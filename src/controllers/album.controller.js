// album controller 

const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { albumService } = require("../services");

const createAlbum = catchAsync(async (req, res) => {

    const userId = req.user._id;

    if (req.file) {
        req.body.image = "/public/uploads/events/" + req.file.filename;
    }
    const album = await albumService.createAlbum(req.body, userId);

    res.status(httpStatus.CREATED).json(
        response({
            message: "Album Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: album,
        })
    );
})

const setAlbumItems = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const albums = await albumService.setAlbumItems(req.body, userId);
    res.status(httpStatus.OK).json(
        response({
            message: "Albums Updated",
            status: "OK",
            statusCode: httpStatus.OK,
            data: albums,
        })
    );
})

const getAllAlbums = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const albums = await albumService.getAllAlbums(userId);
    res.status(httpStatus.OK).json(
        response({
            message: "All Albums",
            status: "OK",
            statusCode: httpStatus.OK,
            data: albums,
        })
    );
})


module.exports = {
    createAlbum,
    setAlbumItems,
    getAllAlbums
}