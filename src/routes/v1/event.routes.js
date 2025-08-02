const express = require("express");
const auth = require("../../middlewares/auth");
const { eventController } = require("../../controllers");
const { eventValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const userFileUploadMiddleware = require("../../middlewares/fileUpload");
const UPLOADS_FOLDER_USERS = "./public/uploads/events";
const uploadUsers = userFileUploadMiddleware(UPLOADS_FOLDER_USERS);

const router = express.Router();



// event routes
router.post("/create", auth("common"), uploadUsers.single("image"), validate(eventValidation.createEvent), eventController.createEvent);
router.get("/all", auth("common"), eventController.getAllEvents);
router.get("/single/:id", auth("common"), eventController.getSingleEvent);

// search by title & filter event 
router.post("/filter", auth("common"), eventController.filterEvent);
router.post("/search", auth("common"), eventController.searchEvent);


// event related extra routes 
router.post("/interested/:id", auth("common"), eventController.interestedEvent);
router.post("/going/:id", auth("common"), eventController.goingEvent);
router.post("/favorite/:id", auth("common"), eventController.favoriteEvent);
router.get("/favorites", auth("common"), eventController.getFavoriteEvents);

// approve & reject event 
router.post("/approve", auth("admin"), eventController.approveEvent);
router.delete("/delete", auth("admin"), eventController.deleteEvent);

module.exports = router;