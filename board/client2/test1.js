var hello = require("./test2.js")
hello.name = "진용화"
hello.hello()
hello.test(function () {
    console.log("콜백 호출됨")
})