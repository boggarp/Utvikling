const setup = require('./setup.js')
const app = setup.app
const db = setup.db

//Handler fremsiden
app.get('', (request,response) => {
    const sql = db.prepare("SELECT * FROM jokes")
    const jokes = sql.all()

    response.render("index.hbs", {
        jokes: jokes, 
    })
})

//Handler Edit Form Page
app.get('/jokes/editForm', (request,response) => {
    const id = request.query.id
    if(!id) {
        response.status(400); //Set status off repsonse to 400 - Bad Request
        response.send('Missing query parameter id!');
        return
    } 
    
    const sql = db.prepare("SELECT * FROM jokes WHERE id=(?)")
    const joke = sql.get(id)

    if(!joke) {
        response.status(404); //Set status off repsonse to 404 - Not Found
        response.send('The id given was not found');
    }

    response.render("editForm.hbs", {
        joke: joke
    })
})


//Handler Edit Joke
app.post('/jokes/edit', (request,response) => {
    const id = request.body.id
    const joke = request.body.joke
    const stars = request.body.stars

    const sql = db.prepare("UPDATE jokes SET joke=(?), stars=(?) WHERE id=(?)")
    const info = sql.run(joke, stars, id)

    if (info.changes === 1) {
        response.redirect("/")
    } else {
        response.status(400); //Set status off repsonse to 400 - Bad Request
        response.send('Update failed!');
    }

})

//Starter opp applikasjonen
app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
})