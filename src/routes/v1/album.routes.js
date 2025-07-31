//create album for store events each user


const express = require('express');
const auth = require('../../middlewares/auth');
const router = express.Router();
const userFileUploadMiddleware = require("../../middlewares/fileUpload");
const validate = require('../../middlewares/validate');
const { albumValidation } = require('../../validations');
const { albumController } = require('../../controllers');
const UPLOADS_FOLDER_USERS = "./public/uploads/albums";
const uploadUsers = userFileUploadMiddleware(UPLOADS_FOLDER_USERS);


router.post("/create", auth("common"), uploadUsers.single("image"), validate(albumValidation.createAlbum), albumController.createAlbum);
router.get("/all", auth("common"), albumController.getAllAlbums); 


module.exports = router;