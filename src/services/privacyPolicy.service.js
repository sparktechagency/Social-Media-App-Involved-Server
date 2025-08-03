const { PrivacyPolicy } = require("../models");


const createPrivacyPolicy = async (privacyPolicyBody) => {
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