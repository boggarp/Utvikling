//Lag mappen Leksjon 5 - Modul for datalagring med Json-fil
//Lag filen fileStorage.js. Dette blir modulen for lagring av 
//data til fil.

const fs = require("fs")

let storeData = function (data, dataFilePath) {
    //Først gjør vi dataen om til tekst, etter Json standarden
    const dataInJsonFormat = JSON.stringify(data)
    fs.writeFileSync(dataFilePath, dataInJsonFormat)
    console.log("Lagret følgende data: " + dataInJsonFormat)
}

let loadData = function(dataFilePath) {
    const dataInJsonFormat = fs.readFileSync(dataFilePath, "utf-8")
    const data = JSON.parse(dataInJsonFormat)
    console.log("Hentet følgende data: " + data)
    return data
}

exports.storeData = storeData
exports.loadData = loadData