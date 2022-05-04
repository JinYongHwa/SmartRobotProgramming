var express = require('express');
var router = express.Router();

router.post("/write", async function (req, res) {
    await Board.create(req.body)
    res.json({
        result: "ok"
    })
})

module.exports = router;