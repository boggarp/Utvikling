//Moduler vi trenger
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

function rootRoute(request, response) {
    let interest1 = {
        name: "Cars",
        Amount: "much"
    }
    let interest2 = {
        name: "Piano",
        Amount: "little"
    }
    let interest3 = {
        name: "Couch",
        Amount: "qruazy"
    }
    let interests = [interest1,interest2,interest3]

    response.render('index.hbs', {
        title: "Velkommen!",
        author: "Hans Hansen",
        interests: interests   
    })
}
app.get('', rootRoute)

function aboutRoute(request, response) {
    response.send("About!")
}
app.get('/about', aboutRoute)

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

