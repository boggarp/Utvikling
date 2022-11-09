//Lager to "person" objekter, 
//Putter de i en tabell
//og gjør de om til Json, for så å skrive de til fil
const fs = require("fs")


//Lager tabell, og personobjekter. Putter objekter inn i tabell
let persons = []
let data1 = {
    name: "Truls",
    age: 27
}
let data2 = {
    name: "Kåre",
    age: 29
}
persons.push(data1)
persons.push(data2)

//Gjør tabell-daten om til en Json-string, altså en tekst
const dataAsJson = JSON.stringify(persons)
console.log(dataAsJson)
//Skriver dataen som vi nå har i "tekstformat" til filen data.json
fs.writeFileSync('./data.json', dataAsJson, "utf-8")