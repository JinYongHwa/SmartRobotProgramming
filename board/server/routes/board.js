var express = require('express');
var router = express.Router();

router.post("/write", async function (req, res) {
    await Board.create(req.body)
    res.json({
        result: "ok"
    })
})
router.get("/list", async function (req, res) {
    // var boardList = [
    //     { id: "1", title: "제목1", writer: "진용화" }
    // ]
    var boardList = await Board.findAll()
    res.json(boardList)
})

module.exports = router;