const { TermsAndCondition } = require("../models");

const createTermsCondition = async (body) => {
    const findTermsCondition = await TermsAndCondition.findOne();
    if (findTermsCondition) {
        findTermsCondition.content = body.content;
        return findTermsCondition.save();
    }
    const termsCondition = await TermsAndCondition.create(body);
    return termsCondition;
};

const getTermsCondition = async () => {
    const termsCondition = await TermsAndCondition.findOne().sort({ createdAt: -1 });
    return termsCondition;
};


module.exports = {
    createTermsCondition,
    getTermsCondition,
};