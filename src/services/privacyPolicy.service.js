const { PrivacyPolicy } = require("../models");


const createPrivacyPolicy = async (privacyPolicyBody) => {
    if (!privacyPolicyBody) {
        throw new Error("Privacy Policy not found");
    }
    const findPrivacyPolicy = await PrivacyPolicy.findOne();
    if (findPrivacyPolicy) {
        findPrivacyPolicy.content = privacyPolicyBody.content;
        return findPrivacyPolicy.save();
    }

    const privacyPolicy = await PrivacyPolicy.create(privacyPolicyBody);
    return privacyPolicy;
};

const getPrivacyPolicy = async () => {
    const privacyPolicies = await PrivacyPolicy.find().sort({ createdAt: -1 });
    if (!privacyPolicies) {
        throw new Error("Privacy Policy not found");
    }
    return privacyPolicies;
};



module.exports = {
    createPrivacyPolicy,
    getPrivacyPolicy,
};