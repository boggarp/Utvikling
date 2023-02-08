//Express app som bruker module movieRegister.
//Vi legger til filmer ved bruk av denne modulen, se linje __ til __
//Vi lager så til en handler som vise filmene som er lagret på en nettside

//Fremgangsmåte :
//Lag mappen "Leksjon 6 -Kort Intro Express"
//Åpne mappen med "Open Folder" i Visual Studio
//Lag filen app.js inni denne
//Åpne terminal, og kjør kommandoen "npm init -y", 
//Kjør så kommandoen "npm install express"

//Henter express-modulen
const express = require('express')
const movieRegister = require("./movieRegister.cjs")

//Legger til filmer i registeret
movieRegister.insertMovie("The dark side of a frog", 113, 5.6)
movieRegister.insertMovie("Every secret has a bad knee", 96, 6.7)
movieRegister.insertMovie("The dark side of a frog", 113, 5.6)
movieRegister.insertMovie("The elefant in the hallway", 97, 2.9)

//Starter Express, og lagrer appen i variabelen app
const app = express()

//Callback funksjon (handler) for når noen åpner root-mappen
//på webserveren vår
function rootRoute(request, response) {
    const programTitle = "MyMovieApp, MMA"
    const programDesc = "App for keeping track off great movies"
    const movies = movieRegister.getMovies()
    let site = "<html>"
    site += "<h1>"+programTitle+"</h1>"
    site += "<h3>"+programDesc+"</h3>"
    site += "<br><h2>Movies<h2>"
    for (let i=0;i<movies.length;i++){
        site += movies[i].title + "<br>"
    }

    site += "</html>"
    response.send(site)
}
//Vi sender inn handleren vi laget over til express, slik at denne trigger
//når noen prøver å åpne "øverste nivå" på domenet vårt, som for eksempel bt.no/
app.get('',rootRoute)

//Starter express
app.listen(3000)













