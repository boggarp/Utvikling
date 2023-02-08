//Lag filn read.js

//Lag filen write.js

const fileStorage = require("./fileStorage.js")
const path = require("path")

//Lager adressen til filen vi skal lese fra i
const dataFilePath = path.join(__dirname, "data.json")

let data = fileStorage.loadData(dataFilePath)

console.log(data)