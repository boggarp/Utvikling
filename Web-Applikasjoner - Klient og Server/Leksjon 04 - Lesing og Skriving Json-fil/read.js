const fs = require("fs")

//Henter data i filen data.json
const data = fs.readFileSync("./data.json", "utf-8")

//Gjør om dataen fra json-format, til vanlig tabell/objekt i Javascript
let parsedJsonData = JSON.parse(data)

//Skriver ut hele tabellen:
console.log(parsedJsonData)

//Skriver ut objektvariabelen name, fra første objekt i tabellen
console.log(parsedJsonData[0].name)