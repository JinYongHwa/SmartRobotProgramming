var { Sequelize } = require("sequelize")

global.User = sequelize.define("User", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }

})
sequelize.sync({
    alter: true
})