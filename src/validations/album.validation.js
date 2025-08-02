//create album for store events each user

const joi = require("joi");

const createAlbum = {
    body: joi.object().keys({
        title: joi.string().required(),
        image: joi.string(),
        events: joi.array()
    }),
};

module.exports = {
    createAlbum,
};