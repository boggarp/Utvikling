//Lage mappen Leksjon 7 - BakerKing Nettside
//Lage mappen src inni her
//Plassere filen app.js inni src mappen
//Vi lager en fil, for å lagre data til nettsiden. Denne kaller vi data.json,
//og plasserer i mappen data.

//Legg inn nodemon, med kommandoen npm install nodemon -g
//Initialisere prosjektet vårt med kommando: npm init -y
//Installerer express modulen, med npm install express
//Legger inn const express = require('express') øverst.

//Lag mappen views
//Inni denne lager du mappen pages

//Moduler vi trenger
const fs = require('fs')
const path = require('path')
const express = require('express')
const hbs = require('hbs')

//Starter Express, og skrur på hbs som template engine
const app = express()
app.set("view engine", hbs)

//Adrsser til views, partials og public. Og lagring av disse innstillingene
const viewPath = path.join(__dirname, "../views/pages")
app.set('views',viewPath)
const partialsPath = path.join(__dirname, "../views/partials")
hbs.registerPartials(partialsPath)
const publicDirectoryPath = path.join(__dirname, "../public") //Gjør det som ligger i mappen public tilgjengelig øverst på "domenet"
app.use(express.static(publicDirectoryPath))

//Henting av data fra data/data.json
const dataPath = path.join(__dirname, "../data")
function loadData() {
    const dataBuffer = fs.readFileSync(dataPath+"/data.json")
    const dataJSON = dataBuffer.toString()
    console.log(JSON.parse(dataJSON))
    return JSON.parse(dataJSON)
}
let data = loadData()

//"Handler" når noen skriver inn kun "domenet vårt"
function rootRoute(request, response){
    response.render("index.hbs", {
        title: data.title,
        desserts: data.desserts
    })
}
app.get('',rootRoute)

//Handler når noen skriver inn about som adresse
function aboutRoute(request, response){
    response.render("about.hbs", {
        title: "About us"
    })
}
app.get('/about',aboutRoute)

//Starter å lytte til innkommende get-requests på port 3000
app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
})


