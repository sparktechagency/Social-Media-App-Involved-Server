// about service 

const { AboutUs } = require("../models");

const createAboutUs = async (data) => {

    const findAboutUs = await AboutUs.findOne();
    if (findAboutUs) {
        findAboutUs.content = data.content;
        return findAboutUs.save();
    }

    const aboutUs = await AboutUs.create(data);
    return aboutUs;
}

const getAboutUs = async () => {
    const aboutUs = await AboutUs.find();
    return aboutUs;
}

module.exports = {
    createAboutUs,
    getAboutUs
}