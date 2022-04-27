
(async () => {

    await test()
    console.log("바로실행")

})()

async function test() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("3초뒤 실행")
            resolve()
        }, 3000)
    })
}