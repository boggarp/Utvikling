const fs = require("fs")

/**
 * Gjør dataen som kommer inn, om til Json-format og lagrer på fil-adressen som blir gitt
 * @param {*} data Dataen som skal lagres. En variabel, en array, ellet et objekt
 * @param {*} dataFilePath Adresse til filen det dataen skal lagres
 */
let storeData = function (data,dataFilePath) {
    const dataInJsonFormat = JSON.stringify(data)
    fs.writeFileSync(dataFilePath, dataInJsonFormat)
    console.log("Lagret følgende data: " + dataInJsonFormat)
     
}

/**
 * Leser filen som "filepath" peker til, gjor om til javascript object/array
 * og returener dette
 * @param {*} dataFilePath Dataen som skal lagres. En variabel, en array, ellet et objekt
 * @returns Dataen som ble lest
 */
let loadData = function (dataFilePath) {
    const dataInJsonFormat = fs.readFileSync(dataFilePath, "utf-8")
    const data = JSON.parse(dataInJsonFormat)

    console.log("Hentet følgende data" + data)
    return data
}

exports.storeData = storeData
exports.loadData = loadData
