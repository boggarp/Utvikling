const fileStorage = require("./fileStorage.js")
const path = require("path")

//Lager en variabel som inneholder adressen til datafilen vår.
const dataFilePath = path.join(__dirname, "./data/data.json")

//Henter det som ligger i datafilen
let data = fileStorage.loadData(dataFilePath)

//Bruker dataen som lå i filen
console.log(data.teskt1)
console.log(data.person1.fornavn)
console.log(data.person1.alder)
console.log(data.tabell1)

//Legger til litt i en tabell
data.tabell1.push("Hei " +data.tabell1.length)


//Lagrer dataen
fileStorage.storeData(data, dataFilePath)


//Oppgave
