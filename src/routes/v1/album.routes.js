//create album for store events each user


const express = require('express');
const router = express.Router();


router.post("/create", (req, res) => {
    res.send(
        {
            code: 201,
            status: "OK",
            message: "album created"
        }
    )
})


module.exports = router;