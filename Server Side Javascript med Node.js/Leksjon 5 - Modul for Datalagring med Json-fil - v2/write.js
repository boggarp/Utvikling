//Lag filen write.js

const fileStorage = require("./fileStorage.js")
const path = require("path")

//Lager adressen til filen vi skal lagre i
const dataFilePath = path.join(__dirname, "data.json")
console.log(dataFilePath)

//Lager litt testdata
let data = ["Holen","Hop", "Garnes"]

//Bruker modulen, og lagrer dataen
fileStorage.storeData(data, dataFilePath)