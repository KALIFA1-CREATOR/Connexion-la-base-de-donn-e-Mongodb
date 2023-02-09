const{ MongoClient } = require("mongodb") // impoter la base de donnée dans mongodb
let dbConnection

module.exports = {
    connectToDb: (cb) =>{
        MongoClient.connect('mongodb://127.0.0.1:27017/maDB')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })

        .catch((err) => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}